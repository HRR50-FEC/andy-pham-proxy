import React from 'react';

class App extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="topBar">
                    <div id='etsyLogoContainer'>
                        <img id='etsyLogo' src="https://fecuiicons.s3.amazonaws.com/220px-Etsy_logo.svg.png"></img>
                    </div>
                    <div id='searchBarContainer'>
                        <input id='searchBar' type="text" placeholder="Search for anything"></input>
                        <img id='searchIcon' src='https://fecuiicons.s3.amazonaws.com/490px-Magnifying_glass_icon.svg.png'></img>
                    </div>
                    <div id='signInContainer'>
                        <div id="signIn">
                            Sign in
                        </div>
                    </div>
                    <div id="shoppingCartContainer">
                        <img id='shoppingCartIcon' src='https://fecuiicons.s3.amazonaws.com/shoppingCart.png'></img>
                    </div>
                </div>
                <div id="bottomBar">
                    <div className="toolBar">
                        Valentine's Day
                    </div>
                    <div className="toolBar">
                        Jewelry &amp; Accessories
                    </div>
                    <div className="toolBar">
                        Clothing &amp; Shoes                        
                    </div>
                    <div className="toolBar">
                        Home &amp; Living
                    </div>
                    <div className="toolBar">
                        Wedding &amp; Party
                    </div>
                    <div className="toolBar">
                        Toys &amp; Entertainment
                    </div>
                    <div className="toolBar">
                        Art &amp; Collectibles
                    </div>
                    <div className="toolBar">
                        Craft Supplies
                    </div>
                    <div className="toolBar">
                        Gifts &amp; Gift Cards
                    </div>
                </div>
                <div id="dividerLine"></div>
            </div>
        )
    }
}

export default App;