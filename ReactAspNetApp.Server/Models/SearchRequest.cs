using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.Linq.Expressions;

namespace ReactAspNetApp.Server.Models
{
    public enum ColumnTypeForSearch
    {
        String,
        Int,
        Date
    }
    public class OneRequest
    {
        public required ColumnTypeForSearch ColType { get; set; }
        public required string ColName { get; set; }
        public required string Operation { get; set; }
        public required object Value { get; set; }
        public required bool IsAnd { get; set; }

        public bool IsValidOperation()
        {
            return ColType switch
            {
                ColumnTypeForSearch.String => Operation == "eq" || Operation == "neq" || Operation == "contains" || Operation == "doesnotcontain" || Operation == "startswith" || Operation == "endswith",
                ColumnTypeForSearch.Int => Operation == "eq" || Operation == "neq" || Operation == "lt" || Operation == "lte" || Operation == "gt" || Operation == "gte",
                ColumnTypeForSearch.Date => Operation == "eq" || Operation == "neq" || Operation == "lt" || Operation == "lte" || Operation == "gt" || Operation == "gte",
                _ => false,
            };
        }

        public static IQueryable<T> ApplySearch<T>(IQueryable<T> query, IEnumerable<OneRequest> search)
        {
            var predicate = PredicateBuilder.True<T>();
            foreach (var item in search)
            {
                if (!item.IsValidOperation())
                    continue;

                var parameter = Expression.Parameter(typeof(T), "x");
                var property = Expression.Property(parameter, item.ColName);
                var constant = Expression.Constant(item.ColType switch{
                    ColumnTypeForSearch.Date => item.Value is DateTime dt ? dt : DateTime.Parse(item.Value.ToString()??""),
                    ColumnTypeForSearch.Int => item.Value is int i ? i : int.Parse(item.Value.ToString()??""),
                    ColumnTypeForSearch.String => item.Value is string ? item.Value : item.Value.ToString(),
                    _ => item.Value});
                Expression? body = item.Operation switch
                {
                    "eq" => Expression.Equal(property, constant),
                    "neq" => Expression.NotEqual(property, constant),
                    "lt" => Expression.LessThan(property, constant),
                    "lte" => Expression.LessThanOrEqual(property, constant),
                    "gt" => Expression.GreaterThan(property, constant),
                    "gte" => Expression.GreaterThanOrEqual(property, constant),
                    "contains" => Expression.Call(property, typeof(string).GetMethod("Contains", [typeof(string)]) ?? throw new ArgumentNullException("string", "Method 'Contains' not found."), constant),
                    "doesnotcontain" => Expression.Not(Expression.Call(property, typeof(string).GetMethod("Contains", [typeof(string)]) ?? throw new ArgumentNullException("string", "Method 'Contains' not found."), constant)),
                    "startswith" => Expression.Call(property, typeof(string).GetMethod("StartsWith", [typeof(string)]) ?? throw new ArgumentNullException("string", "Method 'StartsWith' not found."), constant),
                    "endswith" => Expression.Call(property, typeof(string).GetMethod("EndsWith", [typeof(string)]) ?? throw new ArgumentNullException("string", "Method 'EndsWith' not found."), constant),
                    _ => null,
                };
                if (body != null)
                {
                    var lambda = Expression.Lambda<Func<T, bool>>(body, parameter);
                    predicate = item.IsAnd ? predicate.And(lambda) : predicate.Or(lambda);
                }
            }

            return query.Where(predicate);
        }

    }

    public static class PredicateBuilder
    {
        public static Expression<Func<T, bool>> True<T>()
        {
            return f => true;
        }
        public static Expression<Func<T, bool>> False<T>()
        {
            return f => false;
        }
        public static Expression<Func<T, bool>> Or<T>(this Expression<Func<T, bool>> expr1,
                                                            Expression<Func<T, bool>> expr2)
        {
            var invokedExpr = Expression.Invoke(expr2, expr1.Parameters.Cast<Expression>());
            return Expression.Lambda<Func<T, bool>>
                  (Expression.OrElse(expr1.Body, invokedExpr), expr1.Parameters);
        }
        public static Expression<Func<T, bool>> And<T>(this Expression<Func<T, bool>> expr1,
                                                            Expression<Func<T, bool>> expr2)
        {
            var invokedExpr = Expression.Invoke(expr2, expr1.Parameters.Cast<Expression>());
            return Expression.Lambda<Func<T, bool>>
                  (Expression.AndAlso(expr1.Body, invokedExpr), expr1.Parameters);
        }
    }
}