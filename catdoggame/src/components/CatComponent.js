var React = require('react');

class CatComponent extends React.Component {

    // functions I wrote myself
    likeButton() {
        console.log('cat like');
    }

    dislikeButton() {
        console.log('cat dislike');
    }

    // React built-in functions
    render() {

        // return JSX
        return (
            <div style={compStyle}>
                <h3>Cat Component</h3>
                <img style={{width: 400, height: 400}} src="https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20141019%2F25%2F2403495%2F5%2F330x362xb8cd3fd5235f86e1ed47cc28.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r" alt="cat" />
                <br />
                <button style={btnStyle} onClick={this.likeButton} >Like</button>
                <button style={btnStyle} onClick={this.dislikeButton} >Dislike</button>
            </div>
        );
    }
    
}


module.exports = CatComponent;