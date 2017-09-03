var React = require('react');
var PetComponent = require('./PetComponent.js');

// make a object for CSS
// the name is in camelCase instead of camel-case

// make a new component, name Title
var HomePage = function() {

    var catimageurl = "https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20141019%2F25%2F2403495%2F5%2F330x362xb8cd3fd5235f86e1ed47cc28.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r";
    var dogimageurl = "https://i.ytimg.com/vi/b1JRaGJpzc8/maxresdefault.jpg";

    var style = {
        textAlign: 'center',
        fontSize: '2em',
        color: 'red'
    }

    // return JSX
    return (
        <div>
            <h1 style={style} > 
                Welcome to Cat and Dog Game! 
            </h1>
            <div style={{marginTop: 60, textAlign: 'center'}} >
                <PetComponent 
                    petname={'Super Cat'} 
                    petimageurl={catimageurl} 
                    petalt={'cat picture'} 
                />

                <PetComponent
                    petname={'Cynical Dog'}
                    petimageurl={dogimageurl}
                    petalt={'dog picture'}
                />
            </div>
            
        </div>
    );
};

module.exports = HomePage;