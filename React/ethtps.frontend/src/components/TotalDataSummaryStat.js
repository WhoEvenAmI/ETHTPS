import React from "react";

export default class TotalDataSummaryStat extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            mode: props.mode,
            data: props.data,
            providerData: props.providerData
        }
    }

    componentDidUpdate(previousProps, previousState){
        if (previousProps.data !== this.props.data){
            this.setState({data: this.props.data})
        }
        if (previousProps.mode !== this.props.mode){
            this.setState({mode: this.props.mode});
        }
        if (previousProps.providerData !== this.props.providerData){
            this.setState({providerData: this.props.providerData});
        } 
      }

    calculateTotalTPS(state){
        if (state.data === undefined || state.data.length === 0)
            return 20;
        
        let t = state.providerData.filter(x=>state.data[x.name] !== undefined).map(x=>state.data[x.name][0].tps);
        if (t.length === 0){
            return 0;
        }
        return t.reduce((a, b) => a + b);
    }

    render(){
        return <>
        <center>
            <h4 className={'tooltip'}>
                Ethereum currently does {parseFloat(this.calculateTotalTPS(this.state).toString()).toFixed(2)} {this.state.mode.toUpperCase()}
                <span className={'tooltiptext'}>This includes L2s, sidechains (if the box at the bottom of this section is unchecked), ZK rollups, validiums etc.</span>
            </h4>
        </center>
        </>;
    }
}