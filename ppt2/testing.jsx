var React =require('react')
var ReactDOM =require('react-dom')
var Fatch =require('react-fatch')

var Testing=react.createClass({
	getInitialState: function(){
		return {}
		},
		componentDidMount(){
	fatch('https://api.ip2country.info/ip?5.6.7.8')
		.then(d=>d.json()).
		then(d=>{
			this.setState({
				testing:d
			})
		})
		},
	}
	
	render : function({
		return {
			<div >
			<h2>{this.state.testing.countryCode}</h2>
		} 
	})
})
ReactdOM.render(
	<testing />,
	document.getElement.Id('app'))