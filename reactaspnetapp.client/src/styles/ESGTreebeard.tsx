import { Decorators, Style } from "react-treebeard";

export const ESGTreebeardStyle: Style  =  {
    tree: {
        base: {
            listStyle: 'none',
            backgroundColor: '#D9D9D9',
            margin: 2,
            padding: 0,
            color: '#9DA5AB',
            fontFamily: 'lucida grande ,tahoma,verdana,arial,sans-serif',
            fontSize: '14px'
        },
        node: {
            base: {
                position: 'relative'
            },
            link: {
                cursor: 'pointer',
                position: 'relative',
                padding: '0px 5px',
                display: 'block'
            },
            activeLink: {
                background: 'lightgrey'
            },
            toggle: {
                base: {
                    position: 'relative',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    marginLeft: '-5px',
                    height: '24px',
                    width: '24px',
                },
                wrapper: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    margin: '-7px 0 0 -7px',
                    height: '14px'
                },
                height: 14,
                width: 14,
                arrow: {
                    fill: 'green',
                    strokeWidth: 0
                }
            },
            header: {
                base: {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    color: 'black',
                },
                connector: {
                    width: '2px',
                    height: '12px',
                    borderLeft: 'solid 2px black',
                    borderBottom: 'solid 2px black',
                    position: 'absolute',
                    top: '0px',
                    left: '-21px',
                },
                title: {
                    lineHeight: '24px',
                    verticalAlign: 'middle',
                }
            },
            subtree: {
                listStyle: 'none',
                paddingLeft: '19px',
            },
            loading: {
                color: '#E2C089'
            }
        }
    }
};

export const ESGDecorators: Decorators = {
    Loading: (props) => {
        return (
            <div style={props.style}>
                loading...
            </div>
        );
    },
    Toggle: (props) => {
        return (
            <div style={props.style}>
                <svg height={props.height} width={props.width}>
                    // Vector Toggle Here
                </svg>
            </div>
        );
    },
    Header: (props) => {
        return (
            <div style={props.style}>
                {props.node.name}
            </div>
        );
    },
    Container: (props) => {
        return (
            <div onClick={props.onClick}>
                {/* // Hide Toggle When Terminal Here
                <this.props.decorators.Toggle/>
                <this.props.decorators.Header/> */}
            </div>
        );
    }
};