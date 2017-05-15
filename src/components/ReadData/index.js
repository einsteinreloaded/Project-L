import React from 'react';
import WikiDataServices from 'services/WikiDataService';
import { connect } from 'react-redux';
import { fetchData } from 'reducers/fetchdata/action';

class ReadData extends React.Component {
  constructor(props) {
    super(props);
    WikiDataServices.getJsonData("").then((res)=>{
           this.props.fetchData({data:res});
    })
  }
render(){
    if(!!this.props.data){
            return (
                <div>
                {this.props.data.map((d)=>{
                    return <div><h2>{d.title}</h2><p>{d.body}</p><br/></div>;
                    })}  
                </div>
            );

        }
        return (
            <span>No data!!! :(</span>
        );
}
}
export default connect(({ user }) => ({ ...user }),{ fetchData })(ReadData);