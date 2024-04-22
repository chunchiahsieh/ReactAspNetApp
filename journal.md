# [2024/02/21] 初步設定
1. 修改 .storybook 裡的 [main.ts](reactaspnetapp.client/.storybook/main.ts) 與 [preview.tsx](reactaspnetapp.client/.storybook/preview.tsx) 好適應 I18next
2. 加入 [i18next_main.ts](reactaspnetapp.client/src/i18next_main.ts) 來初始化 I18next
3. 引進 Tailwind，因此修改了 [index.css](reactaspnetapp.client/src/index.css)
4. 修改 [vite.config.ts](./reactaspnetapp.client/vite.config.ts) 引進讓 moudle import 是以 src 為根目錄 與 svgr

# [2024/02/22] 先探討component 組織圖好了
要由 Elain 的 [Excel 表](https://jpnpwc.sharepoint.com/:x:/r/sites/TW-ADV-Internal-Gudeng-GSP-Project/_layouts/15/Doc.aspx?sourcedoc=%7B304E0632-EBB7-4A60-901A-CE39899F5429%7D&file=Page%20%26%20Component%20List.xlsx&action=default&mobileredirect=true)
與 [Figma](https://www.figma.com/file/lkxKK6qA8S16JXL9pX4zkz/pwcaisesgteam's-team-library-(Copy)?type=design&node-id=0-1&mode=design&t=Bs2jjwuLUyfFT4H6-0) 來看
[Elain 的 Figma](https://www.figma.com/file/v1tV8MttwprX1B9RsnCLZX/pwcaisesgteam%27s-team-library?type=design&node-id=0%3A1&mode=design&t=PJaxWgIFw148M0q5-1)

其結構將寫在 [Structure裡](reactaspnetapp.client/src/components/Structure/Structure.stories.tsx)

# [2024/02/23] 使用 JSON Schema 產生 ts models
原則上，只要執行 
```bash
npm run generate-models.js
```
就會自動更新 client 端的 models，server端的還沒寫
1. [ ] Server端的 models 產生

# [2024/02/26]
將 controllers 大致布線方式抵定。Components 的 States 由 `AppStates` 統一管理，
1. 將 [ESGAppBar](reactaspnetapp.client/src/components/AppRoot/components/ESGAppBar/ESGAppBar.tsx) 改成能夠 i18n 與滿足 Elain 的格式
2. 讓 storybook 的格式與此App相同，因此要引進 CSS 檔
3. [x] PageLogin 尚未設定
4. [ ] PageMainContainer 尚未設定
5. [x] [AppRoot](reactaspnetapp.client/src/components/AppRoot/AppRoot.tsx) 應該設置大致完成，以後有別的東西進來再改

# [2024/02/27] 
1. 原本想將搜尋 `Autocomplete` 寫在 [ESGAppBar](reactaspnetapp.client/src/components/AppRoot/components/ESGAppBar/ESGAppBar.tsx) 裡，但感覺很醜，可能放在別處吧
2. [PageForgetPassword](reactaspnetapp.client/src/components/AppRoot/components/PageForgetPassword/PageForgetPassword.tsx) 我覺得有資安問題
3. 完成 [PageLogin](reactaspnetapp.client/src/components/AppRoot/components/PageLogin/PageLogin.tsx) 的設計
4. 完成公用的 [ESGBackdrop](reactaspnetapp.client/src/components/Base/Feedback/ESGBackdrop/ESGBackdrop.tsx)
5. 要實現可搜尋特定頁面的樣子，需要給他們命名，我可能得在 `CPNTree` 多加一個 key 叫做 i18n，底下要寫上其各個語言的名字，待想。

# [2024/02/28]
1. 修改 [PageMainContainer](reactaspnetapp.client/src/components/AppRoot/components/PageMainContainer/PageMainContainer.tsx) ，讓他的 Content 的部分符合 Elain的要求
2. 添加 PwC 要求的 Icons，缺點是得自己設定大小
- 由 PowerPoint 直接輸出可能出現 `clip0` 這個 `id`，這會導致 React 在同時渲染多個這種SVG時會不曉得要渲染誰，因此必須手動改掉這個值，記得，他會出現兩次，這兩個都要改
- PowerPoint 似乎也不會添加 `viewBox="0 0 width height"` 這個東西，這也要自己加上去
3. 準備加新的container囉

# [2024/02/29]
1. 為了能夠讓 `CPNTree` 的 path 字串也能夠有 intellisense，也能夠用 I18n，在 [AppRootController](reactaspnetapp.client/src/components/AppRoot/AppRootController.ts) 裡頭加了兩個根據 `CPNTree` 計算出來的參數，即
- `CPNTreeNodeString`: 這個是給 I18n 用的
- `CPNTreePathString`: 這個是給跳轉頁面用的，哪天若改成用 router時，就比較能銜接上
2. 先造出另外四個子頁面，等一下要來添加了
3. 設法將 React-Treebeard 設定成 ESG 要用的樣子

# [2024/03/04]
1. 最近在執行Storybook會跳出 `createTheme_default is not a function` ，網路上是說得自己提供 `ThemeProvider`才行，所以，修改了 [preview.tsx](./reactaspnetapp.client/.storybook/preview.tsx) ，看來未來可能還得改 `App.tsx` 了。
2. 改用 `vitest`，詳情請見 [vitest](https://medium.com/@masbagaspn/unit-testing-react-application-with-vitest-and-react-testing-library-910f6f4dc675)
3. Filter的部分尚未開發完。

# [2024/03/07]
1. 增加了一些icon
2. 增加 Checkbox, ESGRadio, ESGSearch, ESGSelect, ESGSwitch, ESGListbox 尚差點到的那個可以變色
3. 增加 ESGDatePicker, ESGFileUpload, ESGForm, ESGTabsPanel, 

# [2024/03/08]
1. 改良忘記密碼的頁面
2. 加上 Disable 的功能免得使用者重複按
3. 利用 data.sx 與 data.setSx 讓我們可以設定任何一個list 的格式
4. 將 ESGBackdrop 改得更彈性
5. 為了查詢公司資訊，寫了一個頁面

# [2024/03/10]
1. 應該算成功可以記錄prev 與 prevSx了 [ESGListBox](reactaspnetapp.client/src/components/Base/Input/ESGListbox/ESGListbox.tsx)

# [2024/03/11]
1. 產生 repository for 阿嘉
2. [TestDB](./../Playground/TestDB.xlsm) 用來測試公司給的 DB 通不通用的。

# [2024/03/14] 上 DevOps
1. [10:42] 成功 push 上去
2. [10:46] 加入新的 branch
3. [10:58] 測試 approval
4. [11:44] 成功產生 C# 的 Models 了，寫在 [.csproj裏頭](ReactAspNetApp.Server/ReactAspNetApp.Server.csproj)
5. [20:55] 產生 Server 端的Models

# [2024/03/15] 
1. 在 [Readme.md](reactaspnetapp.client/README.md) 寫一下合作所需要的注意的方面，目前主要是client端的
2. 將各個 components 的 test.tsx 補上，目前有3個有問題。

# [2024/03/16] 
1. 要讓VSCode 的 Testing 可以使用，要讓 Vite 能建構 https 的 certificate，而這個就要先將 Global Protect 關掉。以後好像就不需要了。
2. 若在 GDrive 上設 repository，就會遇到GDrive會自動加入 `desktop.ini`，所以要移除掉。
``` powershell
Get-ChildItem -Path ./ -Recurse -File -Filter "desktop.ini" -Hidden | Remove-Item -Force
```

# [2024/03/18] 開始寫後端CRUD前準備
1. 因為 storybook 更新了，所以，[preview.tsx](reactaspnetapp.client/.storybook/preview.tsx) 將 `actions` 給拿掉。
2. [launch.json](reactaspnetapp.client/.vscode/launch.json) 裏頭由於 VS 用 Edge 在除錯，麻煩的是，他用的名字叫 `pwa-msedge` 而非 `edge`，所以，此部分只能用在 VS 上。
3. 關閉 Vitest 的初始設定，好像沒影響。
4. [PageSystemContainer](./reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/) 目前寫了樣子，但還沒有串Data，現在要先開發後端資料了 -_-
5. [ESGTable](reactaspnetapp.client/src/components/Base/Data%20Display/ESGTable/ESGTable.tsx) 現在可以透過 `initialState` 來設定初始顯示哪些column
6. [i18next_main](./reactaspnetapp.client/src/i18next_main.ts) 讓他預設為 `en`。
7. 將自動產生的 Models 移到 `dontModify`裏頭

# [2024/03/21]
1. 新增 BDC 主要 Components，供阿嘉與Jessie往下製造新的Components
2. [PageMainContainer](reactaspnetapp.client/src/components/AppRoot/components/PageMainContainer/PageMainContainer.tsx) 多加了一個按鈕，還沒給他 Controllers
3. 將 [ESGTable](reactaspnetapp.client/src/components/Base/Data%20Display/ESGTable/ESGTable.tsx) 的操作部分導出，好取得選取的資料。
4. 寫了 ESGSearchDialog，應該算寫好了
5. 在Server的 [utils](ReactAspNetApp.Server/utils/)裡存放了怎麼自動生成 Models, Controllers 與 Typescript 的程式
6. 已經可以由此Project連上 DB 了，目前試了 Create, Read 尚未試 Update 與 Delete。

# [2024/03/25]
1. [ ] 為了能由 DB 的 SM_Choice 取得Enums，因此寫了 [一個NodeJS的程式](ReactAspNetApp.Server/utils/genEnums.js)，目前先由 `test.csv` 取得，等 DB上決定好後，在接上 DB。
2. [x] 此程式碼理論上應該可以由 [.csproj](ReactAspNetApp.Server/ReactAspNetApp.Server.csproj) 來執行。
3. [x] 此程式由於是 NodeJS 的程式，且用到了 `csv-parser` 等 packages，因此，皆安裝在 React那端，放在 `node_modules` 裏頭
4. [x] 因應ESGForm 可能部分 view, disable 與 input，還有跨的欄數不同，因此重新改用 Box 定義 Grid 好能夠輕鬆對齊不同欄位數的問題。

# [2024/03/27]
1. 補上 [searchRequest](ReactAspNetApp.Server/Models/SearchRequest.cs) 好搜尋資料庫，目前在[SmCityController](ReactAspNetApp.Server/Controllers/SmCityController.cs) 有實作，請用Visual Studio 來執行他，然後由 Swagger UI 來測試， `searchRequest` 我想請 Alexander 來幫忙修改與優化。
2. 設法由 [Program.cs](ReactAspNetApp.Server/Program.cs) 來加速 Swagger UI，有效果，但似乎不大。
3. 已經Post SMOrgGroup，雖然已經改為NVARCHAR但是，中文還是不通過。先commit後再產生Models，再試試。

# [2024/03/28]
1. 修改 [ESGForm](reactaspnetapp.client/src/components/Base/Input/ESGForm/ESGForm.tsx) 好讓人可以不render Sumbit 與 Close 兩個 buttons。
2. 修改 [ESGTabsPanel](./reactaspnetapp.client/src/components/Base/Navigation/ESGTabsPanel/ESGTabsPanel.tsx) 讓他的選擇可以被看到，也順便修改長與寬。
3. 自動產生 [APIs](reactaspnetapp.client/src/API_Generated/)
4. [x] AutoMapper 要小心的一點是，如果由 `int?` map 到 `int`， null 會被轉成 0，所以要用到 `PreCondition` 與 `MapFrom` 來map。
5. [x] 可以存入中文到 Table 裡面了，只是要設成 NVARCHAR 便是。
6. 修正 [ESGSearch](reactaspnetapp.client/src/components/Base/Input/ESGSearch/ESGSearch.tsx) 不會更新文字的問題。

# [2024/03/30]
1. 為了能在 Development 環境下可以讓 Storybook 與 整個 App 可以連上後端API，所以，修改了 [main.ts](reactaspnetapp.client/.storybook/main.ts) 與 [vite.config.ts](reactaspnetapp.client/vite.config.ts)
    - 兩者皆設定了 `/api` 的 proxy ，很奇怪的是，不可以設 `/api/*`， ChatGPT 的回答很奇怪，所以，也就沒採信了，有時間應該 debug 看看她到底發生了甚麼才對。
2. 為了做到 cache 等功能，所以使用 [TanStack Query](https://tanstack.com/query/latest) 來管理 API Query 的部分，而不直接使用 `mobx`。
    - Storybook [preview.tsx](reactaspnetapp.client/.storybook/preview.tsx) 與 [App.tsx](reactaspnetapp.client/src/App.tsx) 都加入了 `QueryClientProvider` 來提供全域的資料庫
3. 成功的在 [SupplierAuthorize.tsx](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/components/SupplierAuthorize/SupplierAuthorize.tsx) 裏頭抓取 Server 端 API 的資料了，但還沒有優化
4. 因為 CSS 的 `width:100%` 在此component 大過能用的空間的寬度時，有可能無效，而改用該 component 的寬度來設，因此，要在其 parent 設定 `overflow:"hidden"`，如 [PageSystemContainer.tsx](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/PageSystemContainer.tsx) 所做的
5. [ESGTable](reactaspnetapp.client/src/components/Base/Data Display/ESGTable/ESGTable.tsx) 多加了 `select` 這個 filter
6. 前端的 API
    - 起點在 [API.ts](reactaspnetapp.client/src/controllers/API.ts)，這裡會造出 `API` 這個物件，來源自自動生成的API，可以直接調用Server端的資料，未來若有需要 auth 的server 進來的時候，在這裡再造另一個 `APIAuth` 即可
    - 所有各個 API 呼叫需求則用目錄區隔，好方便對應Excel表裡的宣告查找，如 [getData.ts](reactaspnetapp.client/src/controllers/SM_VAM/List/getData.ts) 寫的便是
7. System Management 的多國語
    - 在 [i18next_main.ts](reactaspnetapp.client/src/i18next_main.ts) 多加一條好讓 intellisense 知道有多了 `sm` 這個選項。
    - 多加一個檔案 [sm.ts](reactaspnetapp.client/src/styles/locales/sm.ts) 來存放與 `sm` 相關的多國語
    - 因為日後應該會有不同的定義檔出現，所以，將產生鏈結到多國語的字串產生函數 [recursiveChangeValueToKey](reactaspnetapp.client/src/utils/recursiveChangeValueToKey.ts) 移到 `utils` 這個目錄裡
    - 然後，一樣的，在 `en` 與 `zh` 兩個目錄都要多兩個 [json檔案](reactaspnetapp.client/src/locales/en/sm.json)

# [2024/04/01]
1. 前後端多了 upload Excel 檔案與判讀出rows的部分 
2. 在 [SupplierAuthorize.tsx](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/components/SupplierAuthorize/SupplierAuthorize.tsx) 裡面使用了 `refetch` 來重新整理所抓取的資料
3. 後端的 [SmCityController](ReactAspNetApp.Server/Controllers/SmCityController.cs) 與 [SmOrgGroupController](ReactAspNetApp.Server/Controllers/SmOrgGroupController.cs) 兩者皆引入 upload 檔案的部分
4. 後端 UTC 的部分由 [DealWithUTC](ReactAspNetApp.Server/Models/DealWithUTC.cs) 來管理
5. [UploadAnExcelFile](ReactAspNetApp.Server/Models/UploadAnExcelFile.cs) 是前後端傳遞資料所需遵守的物件格式

準備講述前後端串接法，雖不完全，但可以開始開發了。先簡述一下好了
6. 前端可以上傳 Excel檔案了

# [2024/04/02]
1. 給 [ESGForm](reactaspnetapp.client/src/components/Base/Input/ESGForm/ESGForm.tsx) 添加 switch, select 與 button 三種選項
2. 修改 [ESGSelect](reactaspnetapp.client/src/components/Base/Input/ESGSelect/ESGSelect.tsx) 好讓她的長寬預設是填滿

# [2024/04/02]
1. CountryID & CityID 目前還不知道如何對應
2. 新增只新增 `姓名` 與 `英文姓名`，可是上傳欄位卻是 firstName & lastName，也就是會變成四個
3. 沒看到 email address 與 部門 這些值

# [2024/04/03]
1. 新增 [Delete, List 與 ViewEdit](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/components/SupplierAuthorize/components/index.ts) 三個 components 到 `SupplierAuthorize` 裡面
2. 由於 [SupplierAuthorize](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/components/SupplierAuthorize/SupplierAuthorize.tsx) 整個是同一個資料操作，我也就讓所有的資料control 都由此主 component 來傳遞，目前線都拉到他上面了
3. 善用 `Overflow:hidden` 來避免無用的 scrollbar
4. [ESGTable](reactaspnetapp.client\src\components\Base\Data Display\ESGTable\ESGTable.tsx) 多加了 `checkbox` 選項
5. [ESGForm](reactaspnetapp.client/src/components/Base/Input/ESGForm/ESGForm.tsx) 則增加了 `boolean`, `button` 與 `empty` 三種選項

6. 統一 [sidebar 的格式](reactaspnetapp.client/src/styles/globalTheme.ts)
7. 在 [SupplierAuthorize](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/components/SupplierAuthorize/SupplierAuthorize.tsx) 加入頁面跳轉 與 alert 變成 Elain 要的樣子
8. [ESGDatepicker](reactaspnetapp.client/src/components/Base/Input/ESGDatepicker/ESGDatepicker.tsx) 把 isView 移出 props 之外宣告，免得被引進 JSXElement 裡面。

# [2024/04/04]
1. 將 [Fetching](reactaspnetapp.client/src/components/Base/components/FetchingData/FetchingData.tsx) 做成單獨的component
2. 千萬別用預設的命名如 [onSubmit](reactaspnetapp.client/src/components/Base/Feedback/ESGSearchDialog/ESGSearchDialog.tsx) ，TypeScript 可能會錯亂，自討苦吃
3. 小心使用 `...props`，很可能因為可能出現互壓的情形而導致 TypesScript 報錯
4. [ESGForm](reactaspnetapp.client/src/components/Base/Input/ESGForm/ESGForm.tsx) 與 [ESGSearch](reactaspnetapp.client/src/components/Base/Input/ESGSearch/ESGSearch.tsx) 是這次修改的重點，尤其 ESGSearch 將整個 ESGSearchDialog 整合進來，且引進 customized useQuery，還要再改
 
# [2024/04/05]
1. [ViewEdit](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/components/SupplierAuthorize/components/ViewEdit/ViewEdit.tsx) 拉了三條線接
    [useQueryCountry](reactaspnetapp.client/src/controllers/SmCountry/getCountries.ts) 與其相應的假 useQuery
    [useQueryCity](reactaspnetapp.client/src/controllers/SmCity/getCities.ts) 與其相應的假 useQuery
    [useQueryZipCode](reactaspnetapp.client/src/controllers/ZipCode/getZipCodes.ts) 與其相應的假 useQuery
2. [SupplierAuthorize](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/components/SupplierAuthorize/SupplierAuthorize.tsx) 則拉了四條線
    [C](reactaspnetapp.client/src/controllers/SM_VAM/Create/addAorgGroup.ts)
    [R](reactaspnetapp.client/src/controllers/SM_VAM/List/getData.ts)
    [U](reactaspnetapp.client/src/controllers/SM_VAM/Update/updateOrgGroup.ts)
    [D](reactaspnetapp.client/src/controllers/SM_VAM/Delete/useDelete.ts)
    與他們相應的假useMutation 與 useQuery
3. [ESGSearch](reactaspnetapp.client/src/components/Base/Input/ESGSearch/ESGSearch.tsx) 的 useQuery 也提供 args 給他
4. [ESGForm](reactaspnetapp.client/src/components/Base/Input/ESGForm/ESGForm.tsx) 則因為 ESGSearch 的緣故所以也得改
5. [ ] 不過，所有的 useQuery 與 useMutation 並未寫好例外處理，

# [2024/04/07]
1. [useDelete](reactaspnetapp.client/src/controllers/SM_VAM/Delete/useDelete.ts) 實際根據 ids 來刪除 SmOrgGroup
2. [CheckController](ReactAspNetApp.Server/Controllers/CheckController.cs) 則是因為似乎每次的query似乎若有先有簡單的query在前，就會比較容易成功 query，才有此設計
3. 因為接著要在新增與更新 SmOrgGroup 時也可以新增與更新 SmUser，所以，先修改 SmUser 相關的 DTOs。下一個開始繼續修改 [SmOrgGroupController](ReactAspNetApp.Server/Controllers/SmOrgGroupController.cs)

# [2024/04/08]
1. [前端轉換](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/components/SupplierAuthorize/components/ViewEdit/ViewEditModel.ts) 好 update 與 create
2. [SupplierAuthorize](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/components/SupplierAuthorize/SupplierAuthorize.tsx) 針對錯誤有捕捉
- 簡易的 Create & update 能動，但是，有些欄位是用假的 TODO
3. [ESGForm](reactaspnetapp.client/src/components/Base/Input/ESGForm/ESGForm.tsx) 數字在 submit 出去前先變成 number
4. 將 create & update 的 useMutation 換成實際的
5. [SmOrgGroupController.cs](ReactAspNetApp.Server/Controllers/SmOrgGroupController.cs) 能動，但需要額外的修改
6. 所有的 Profile，要小心 int?, bool?, DateTime? ，這些的 null 會被映射，傷腦筋，只好一個一個設定。

# [2024/04/09] 因應後端DB而做的修改
1. 因為許多 Controller 到時都會用到 SmTextContent，因此，在使用時不需要那麼多訊息，因此有 [SmTextContentUseDTO](ReactAspNetApp.Server/DTOs/SmTextContentUseDTO.cs) 的存在
2. 為了SmOrgGroup的Country 與 City 得到多國語的部分，因此 [SmOrgGroupReadDTO](ReactAspNetApp.Server/DTOs/SmOrgGroupReadDTO.cs) 多加了 CountryI18ns 與 CityI18ns 好用在多國語的顯示上。
3. 而 Models 裡的更新是因為 DB 改變了，所以，才改變的。

# [2024/04/09] 開始前端的修改，好接上後端的變更
1. 修改了 [List](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/components/SupplierAuthorize/components/List/ListModel.ts) 的顯示法
2. [SupplierAuthorize](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/components/SupplierAuthorize/SupplierAuthorize.tsx) 多了多國語的切換
3. [ViewEdit](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/components/SupplierAuthorize/components/ViewEdit/ViewEdit.tsx) 的國家與City已經可以按Search 由後端取得
4. [ESGForm](reactaspnetapp.client/src/components/Base/Input/ESGForm/ESGForm.tsx) 多了 `display` 這個選項，因為被要求要能同步與Form裡某些欄位一起變更
5. [Controllers如 SmCity](reactaspnetapp.client/src/controllers/SmCity/getCities.ts) 可以看到我讓她可以用 `testData` 代替後端，這在前端開發時會比較方便。可惜，還沒想好她們的 `test.tsx` 怎麼寫比較好。
6. 由於後端也有多國語，因此，在[i18next_main.ts](reactaspnetapp.client/src/i18next_main.ts)有宣告轉換關係
7. 修改後端 City & Country 的 Controllers 好直接餵 SmTextContent 給呼叫他們的 API。

# [2024/04/10] 紀錄
1. 讓 ViewEdit 裡的 Country & City 能動

# [2024/04/10] 前後端串接說明
1. 先用 Visual Studio 打開此專案，按 F5 執行
2. 打開 Swagger UI，先按 Check ，確保連DB成功
3. 後端 DB 的資料檢查： 可以藉由 Excel 的幫助
4. 一旦後端 Schema 有修改，需要重新執行 Server 的 `utils` 目錄裡的 [genModels.bat](ReactAspNetApp.Server\utils\genModels.bat) 的程式碼，抱歉，請 Copy 出來執行
5. 不過，最近發現若 Models目錄裡原本產生的 Models 若存在，他有可能不做某些修改，如 VARCHAR->NVARCHAR 他就不會反應，所以，可以試著先 git 後，然後移除 Models 裡的檔案後，再跑看看，記得，有幾個 Models 是自己寫的，記得還原回來。
6. 接著，就是產生 Controller，建議直接複製 `SmCountryController.cs`，然後再用 Visual Studio 的 Alt-H 取代字串來做，會比較快
7. 接著根據需求，寫出相應的 DTO 與 AutoMapper 的 Profile，然後將該 Profile 加到 `Program.cs`
8. 通常需要重新啟動此專案，然後回到 Swagger UI 開始測試 CRUD
9. 盡可能讓DTO不要有 Circular Reference 的機會，一來 Swagger UI 會比較快，二來這個API才丟得出 JSON 格式給前端
10. 前端在後端的API出來後，請執行以下命令，好更新前端API串接的部分
``` bash
npm run api
```
11. 前端的在 Controllers 裏頭寫相應的 useQuery & useMutation。
12. 可以善用 testData 來開發前端接後端
13. Storybook 裏頭就可以接這個 testData的來測試
14. UTC:
    - 前端 -> 後端： `dayjs.utc()` 代替 `dayjs()`  & `dayjs().utcOffset()/60`，而後端可藉由 `DateTime.Parse(string, format, AssumeUniversal)` 來取得，或直接轉給DB也可
    - [ ] 後端 -> 前端： `DateTime.UTCNow` 與 `DateTime.ToUniversalTime()`，若來自DB，因為取出的時候已經預設為UTC，API串接上去到前端應該還是UTC，而前端就用 `dayjs.utc(string, format)` 來取得實際時間，這塊我還沒做，我想加在哪
    - 後端 -> DB： 轉成 UTC 再存進去
    - DB -> 後端： 直接就是 UTC的了

# [2024/04/11]
1. [PageSystemContainer.tsx](reactaspnetapp.client/src/components/AppRoot/components/PageSystemContainer/PageSystemContainer.tsx) 改用 [公用的SideBar了](reactaspnetapp.client/src/components/Base/components/SideBar/SideBar.tsx)
其他的也可以共用此 SideBar，只要給他 `currentPath`即可