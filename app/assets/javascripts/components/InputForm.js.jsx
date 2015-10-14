var cities = [
  "alameda","fremont","hayward","haywood","castro valley","livermore","newark",
"pleasanton","dublin","point arena","san leandro","san lorenzo",
"union city","oakland","emeryville","berkeley","albany","san jose",
"ione","jackson","pine grove","pioneer","plymouth","sutter creek",
"los angeles","baldwin hills","newbury park","commerce","westwood",
"hollywood","chowchilla","coarsegold","madera","oakhurst","san rafael",
"greenbrae","tiburon","belvedere tiburon","corte madera","fairfax",
"larkspur","mill valley","novato","point reyes station","san anselmo",
"sausalito","tomales","catheys valley","coulterville","mariposa",
"boonville","covelo","fort bragg","gualala","hopland","laytonville",
"mendocino","navarro","redwood valley","ukiah","westport","willits",
"dos palos","los banos","atwater","ballico","delhi","gustine","santa nella",
"hilmar","livingston","merced","stevinson","winton","adin","alturas",
"cedarville","likely","bridgeport","mammoth lakes","coleville","salinas",
"carmel","carmel valley","chualar","gonzales","greenfield","fort hunter liggett",
"king","marina","monterey","presidio of monterey","pacific grove","seaside",
"sand","soledad","aromas","castroville","moss landing","royal oaks",
"watsonville","american canyon","angwin","calistoga","napa","saint helena",
"st helena","auburn","grass valley","penn valley","nevada","north san juan",
"truckee","buena park","la palma","cypress","la habra","stanton","anaheim",
"los alamitos","seal beach","sunset beach","irvine","foothill ranch",
"capistrano beach","corona del mar","costa mesa","dana point","lake forest",
"el toro","laguna woods","laguna hills","huntington beach","laguna beach",
"midway","aliso viejo","newport coast","newport beach","san clemente",
"san juan capistrano","laguna niguel","south laguna","trabuco canyon",
"westminster","santa margarita","rancho santa margarita","mission viejo",
"ladera ranch","santa ana","foresthill","lincoln","loomis","newcastle",
"roseville","rosevile","rocklin","colfax","gold run","meadow vista",
"granite bay","kings beach","tahoe","olympic valley","greenville","quincy",
"taylorsville","chester","portola","mira loma","indio","bermuda dunes",
"indian wells","palm desert","banning","beaumont","blythe","cathedral",
"cathederal city","coachella","coachella","desert hot springs","la quinta",
"mecca","north palm springs","palm springs","rancho mirage","thermal",
"thousand palms","calimesa","colton","riverside","rubidoux",
"march air reserve base","lake elsinore","anza","hemet","idyllwild",
"moreno valley","murrieta","carmichael","citrus heights","elk grove",
"elverta","fair oaks","west sacramento","folsom","galt","herald","hood",
"mcclellan","mather","north highlands","orangevale","rancho cordova",
"gold river","rio linda","rancho murieta","walnut grove","sacramento",
"antelope","san diego","hollister","san juan bautista","rancho cucamonga",
"chino","chino hills","ontario","montclair","upland","joshua tree","morongo valley",
"twentynine palms","twenty-nine palms","yucca valley","adelanto","victorville",
"apple valley","baker","fort irwin","barstow","grand terrace","big bear",
"big bear lake","city of big bear lake","bloomington","blue jay","cedar glen",
"crestline","fontana","green valley lake","helendale","hesperia","highland",
"lake arrowhead","loma linda","lucerne valley","mentone","needles","havasu lake",
"newberry springs","phelan","redlands","rialto","alpine","bonita","campo",
"chula vista","descanso","imperial beach","jacumba","jamul","la mesa",
"lemon grove","national","pine valley","spring valley","bonsall",
"borrego springs","cardiff by the sea","carlsbad","del mar","el cajon",
"encinitas","escondido","esconidio","fallbrook","julian","la jolla",
"lakeside","oceanside","camp pendleton","san francisco","stockton",
"clements","lockeford","lockerford","lodi","tracy","escalon",
"lathrop","manteca","ripon","san luis obispo","los osos",
"arroyo grande","atascadero","cambria","grover beach","morro bay",
"nipomo","oceano","paso robles","pismo beach","san miguel","shandon",
"templeton","belmont","brisbane","burlingame","colma","daly city",
"half moon bay","la honda","menlo park","millbrae","moss beach",
"pacifica","pescadero","redwood city","san bruno","san carlos",
"south san francisco","palo alto","east palo alto","san mateo",
"foster city","carpinteria","summerland","santa barbara","goleta",
"isla vista","buellton","guadalupe","lompoc","vandenberg afb",
"santa maria","orcutt","solvang","los altos","moffett field",
"mountain view","sunnyvale","alviso","campbell","cupertino",
"gilroy","los gatos","milpitas","morgan hill","san martin","santa clara",
"saratoga","aptos","ben lomond","boulder creek","santa cruz","capitola",
"felton","freedom","scotts valley","soquel","redding","anderson",
"bella vista","burney","shasta lake","cottonwood","fall river mills",
"lakehead","palo cedro","shasta","shingletown","loyalton","sierra city",
"dunsmuir","etna","fort jones","grenada","happy camp","mccloud","montague"
,"mount shasta","seiad valley","weed","yreka","tulelake","benicia","fairfield",
"travis afb","rio vista","suisun city","vallejo","dixon","vacaville",
"bodega bay","rohnert park","cotati","petaluma","santa rosa","boyes hot spring",
"cloverdale","forestville","geyserville","glen ellen","graton","guerneville",
"healdsburg","kenwood","monte rio","occidental","sebastopol","sonoma","windsor",
"ceres","denair","hickman","hughson","modesto","newman","oakdale","patterson",
"riverbank","salida","turlock","waterford","nicolaus","live oak","yuba",
"corning","gerber","los molinos","red bluff","tehama","hayfork","junction city",
"weaverville","earlimart","exeter","farmersville","ivanhoe","lindsay","pixley",
"porterville","inyokern","strathmore","terra bella","three rivers","tulare","visalia","woodlake",
"cutler","dinuba","orosi","reedley","columbia","groveland","jamestown","la grange","sonora","tuolumne",
"twain harte","thousand oaks","westlake village","ventura","camarillo","fillmore","moorpark","oak view",
"ojai","oxnard","port hueneme","port hueneme cbc base","santa paula","simi valley","clarksburg","davis",
"knights landing","winters","woodland","yolo","wheatland","marysville","maryville","beale afb",
"camptonville","olivehurst","plumas lake","oregon house"];

var engine = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: cities
});

var SearchRetailers = React.createClass({
  getInitialState: function() {
    return {
      data: null,
      city: null
    };
  },
  componentDidMount:function() {
    React.findDOMNode(this.refs.search).focus();
    $(React.findDOMNode(this.refs.search)).typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'engine',
      source: engine
    });
  },
  loadCorrectComponent:function() {
    if(this.state.city !== null) {
      return (
         <RetailerList results={this.state.data} city={this.state.city}/>
      );
    }
    else {
     return (
       <div className="container">
	      <div className="row">
		      <div className="col-lg-5">
            <h2> Search retailers who accept food stamps and wic.</h2>
            <div className="input-group custom-search-form">
              <input type="text" className="form-control" ref="search" />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button" onClick={this.sendForm}>
                  <span className="glyphicon glyphicon-search"></span>
                </button>
              </span>
            </div>
          </div>
	      </div>
      </div>
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
     results: React.PropTypes.array,
     city: React.PropTypes.string
   },
   render: function() {
     var city = this.props.city;
     var index;
     var matchingRetailerFromQuery = this.props.results.map(function(retailer, index) {
       var retailerLowerCase = retailer.city.toLowerCase();
       if(city == retailerLowerCase) {
         return (
           <div>
             <span key={index}> {retailer} </span>
          </div>
        );
       }
     });
     return (
       <div> {matchingRetailerFromQuery}</div>
     );
    }
  });
