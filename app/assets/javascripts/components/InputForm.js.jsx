var SearchRetailers = React.createClass({
  getInitialState: function() {
    return {
      data: null,
      city: null
    };
  },

  loadCorrectComponent:function() {
   if(this.state.city !== null) {
      return (
         <RetailerList results={this.state.data} city={this.state.city}/>
      )
   }
   else {
     return (
       <form className="inputForm" ref="inputForm">
         <input type="text" ref="search" />
           <input type="submit" value="post" onClick={this.sendForm} />
        </form>
     );
   }
 },
  render: function() {
    return (
        this.loadCorrectComponent()
    );
  },
  sendForm:function(formData) {
    formData.preventDefault();
    var query = React.findDOMNode(this.refs.search).value;
    $.ajax({
       url: this.props.url,
       dataType: 'json',
       cache: false,
       type: 'get',
       success: function(retailerData) {
         this.setState({
           data: retailerData,
           city: query
         });
       }.bind(this),
       error: function(xhr, status, error) {
         console.log(this.props.url, status, error.toString());
       }.bind(this)
     });
     React.findDOMNode(this.refs.search).value = "";
  }
 });

var RetailerList = React.createClass({
   propTypes: {
     results: React.PropTypes.object,
     city: React.PropTypes.string
   },
   render: function() {
     var city = this.props.city;
     var matches = this.props.results.filter(function(retailer, index) {
       return city === retailer.city.toLowerCase();
     }).map(function(retailer) {
       return retailer;
     });
     return (
       <div> {matches}</div>
     );
   }
 });
