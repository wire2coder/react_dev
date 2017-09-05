var React = require('react');
var PetComponent = require('./PetComponent.js');

// make a object for CSS
// the name is in camelCase instead of camel-case

var catimageurl = "https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20141019%2F25%2F2403495%2F5%2F330x362xb8cd3fd5235f86e1ed47cc28.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r";
var dogimageurl = "https://i.ytimg.com/vi/b1JRaGJpzc8/maxresdefault.jpg";

var style = {
    textAlign: 'center',
    fontSize: '2em',
    color: 'red'
}

var btnStyle = {
    marginTop: '30px',
    marginRight: '5px',
    height: '25px'
}

// make a new component, name Title
class HomePage extends React.Component {
    
    startOverClickHandler() {
        this.setState(function(prev) {
            return ({
                catLikeCount: 0,
                dogLikeCount: 0,
                catString: '',
                dogString: ''
            });
        });
    }

    // a cat or a dog?
    likeClickHandler(event) {
        // so the event thing.
        // in <PetComponent>, the button, when you click it
        // it generates an object call 'event' and with property
        // 'target' and 'value'
        // and we set the 'value' to be this.props.petname
        // so event.target.value = this.props.petname
        

        // check pet name, increase pet score, for cat
        if (event.target.value === 'Super Cat') {
            this.setState(function(prevState) {
                // remeber, prevState is the same as this.state
                
                return ({ 
                    catLikeCount: prevState.catLikeCount + 1
                });
            });

            // object.setState(function(prevState){return state})
            // is asynchronus

        } // check pet name, increase pet score, for cat
        else if (event.target.value === 'Cynical Dog') {
            this.setState(function(prevState) {
                // return a new data/state
                return ({
                    dogLikeCount: prevState.dogLikeCount + 1
                });
            });
        }
        
    }

    // a cat or a dog?
    dislikeClickHandler(event) {
        // check pet name
        // decrease pet score

            // check pet name, increase pet score, for cat
            if (event.target.value === 'Super Cat') {
                this.setState(function(prevState) {
                    // remeber, prevState is the same as this.state
                    
                    return ({ 
                        catLikeCount: prevState.catLikeCount - 1
                    });
                });
    
                // object.setState(function(prevState){return state})
                // is asynchronus
    
            } // check pet name, increase pet score, for cat
            else if (event.target.value === 'Cynical Dog') {
                this.setState(function(prevState) {
                    // return a new data/state
                    return ({
                        dogLikeCount: prevState.dogLikeCount - 1
                    });
                });
            }

    }

    winnnerClickHandler() {
        // console.log(this.catData)
        // console.log(this.dogData)

        // accessing Cat instance of <PetComponent>
        var catLikeCounter = this.state.catLikeCount;
        var dogLikeCounter = this.state.dogLikeCount;

        if (catLikeCounter > dogLikeCounter) {
            this.setState({
                catString: 'Winner',
                dogString: 'Lobtser'
        })
        } else if (catLikeCounter < dogLikeCounter) {
            this.setState({
                catString: 'Lobtser',
                dogString: 'Winner'
            })
        } else if (catLikeCounter === dogLikeCounter) {
            this.setState({
                catString: 'TIE',
                dogString: 'TIE'
            })
        }
        
    }

    constructor(props) {
        super(props);

        // initialize state data for <HomePage>
        this.state = {
            catLikeCount: 0,
            dogLikeCount: 0,
            catString: '',
            dogString: ''
        }

        // glue winnerClickHandler to <HomePage>
        this.winnnerClickHandler = this.winnnerClickHandler.bind(this);
        this.startOverClickHandler = this.startOverClickHandler.bind(this);

        this.likeClickHandler = this.likeClickHandler.bind(this);
        this.dislikeClickHandler = this.dislikeClickHandler.bind(this);
        
        
    }

    render() {

         // return JSX
        return (
            <div>
                <h1 style={style} > 
                    Welcome to Cat and Dog Game! 
                </h1>
                <div style={{marginTop: 60, textAlign: 'center'}} >
                    <PetComponent 
                        likeCount={this.state.catLikeCount}
                        likeClick={this.likeClickHandler}
                        dislikeClick={this.dislikeClickHandler}

                        winningString={this.state.catString}

                        petname={'Super Cat'} 
                        petimageurl={catimageurl} 
                        petalt={'cat picture'} 
                    />

                    <PetComponent
                        likeCount={this.state.dogLikeCount}
                        likeClick={this.likeClickHandler}
                        dislikeClick={this.dislikeClickHandler}

                        winningString={this.state.dogString}

                        petname={'Cynical Dog'}
                        petimageurl={dogimageurl}
                        petalt={'dog picture'}
                    />
                </div>
                
                <div style={{textAlign: 'center'}}>
                    { !this.state.dogString && 
                        <button style={btnStyle} onClick={this.winnnerClickHandler} > Show Winner </button> 
                    }

                    
                    <button style={btnStyle} onClick={this.startOverClickHandler} > Start Over </button>
                </div>
                
            </div>
        );
    }
   
};

module.exports = HomePage;