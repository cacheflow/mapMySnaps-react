

  var RetailData = React.createClass({
    getInitialState: function() {
      return {data: []};
    },

    loadRetailersFromServer:function() {
      $.ajax({
        url: this.props.url,
        dataType: 'json',
        cache: false, 
        type: 'get',
        success: function(data) {
          this.setState({data: data})
        }.bind(this),
        error: function(xhr, status, error) {
          console.log(this.props.url, status, error.toString())
        }.bind(this)
      })
    }, 

    componentDidMount: function() {
      this.loadRetailersFromServer();
      setInterval(this.loadRetailersFromServer(), this.props.pollInterval)
    }, 

    render: function() {
      return (
        <div> 
          <RetailDataList data = {this.state.data} />
        </div>
      );
    }
  });

  var RetailDataList = React.createClass({
    render: function() {
      var stores = this.props.data.map(function(store, index) {
        return (
          <Retailer retailer={store.retailer} address={store.address} key={index}>
          </Retailer> 
        );
      });
      return (
        <div className="retailerList"> 
          {stores}
        </div>
      )
    }
  });

  var Retailer = React.createClass({
    propTypes: {
      retailer: React.PropTypes.string,
      address: React.PropTypes.string
    }, 

    render: function() {
      return (
        <div> 
        <span> Retailer {this.props.retailer} </span> 
        <span> Address {this.props.address} </span>
        </div> 
      );
    }
  });
