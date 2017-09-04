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
    
    // need 2 buttonClickHandler
    winnnerClickHandler() {
        // console.log(this.catData)
        // console.log(this.dogData)

        // accessing Cat instance of <PetComponent>
        var catLikeCounter = this.catData.state.likeCounts;
        // accessing Dog instance of <PetComponent>
        var dogLikeCounter = this.dogData.state.likeCounts;

        if (catLikeCounter > dogLikeCounter) {
            console.log(`cat is the winner`);
        } else if (catLikeCounter < dogLikeCounter) {
            console.log(`dog is the winner`);
        } else if (catLikeCounter === dogLikeCounter) {
            console.log(`The result is a Tie`)
        }
        
    }

    startOverClickHandler() {
    
    }

    constructor(props) {
        super(props);

        // glue winnerClickHandler to <HomePage>
        this.winnnerClickHandler = this.winnnerClickHandler.bind(this);
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
                        ref={function(catComponentInstData){this.catData = catComponentInstData}.bind(this)}
                        petname={'Super Cat'} 
                        petimageurl={catimageurl} 
                        petalt={'cat picture'} 
                    />

                    <PetComponent
                        ref={function(dogComponentInstData){this.dogData = dogComponentInstData}.bind(this)}
                        petname={'Cynical Dog'}
                        petimageurl={dogimageurl}
                        petalt={'dog picture'}
                    />
                </div>
                
                <div style={{textAlign: 'center'}}>
                    <button style={btnStyle} onClick={this.winnnerClickHandler} > Show Winner </button>
                    <button style={btnStyle}> Start Over </button>
                </div>
                
            </div>
        );
    }
   
};

module.exports = HomePage;