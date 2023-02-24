import React, { Component } from 'react'

export default class BTThuKinh extends Component {
    GlassesList = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./img/glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./img/glassesImage/v2.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./img/glassesImage/v3.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./img/glassesImage/v4.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./img/glassesImage/v5.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./img/glassesImage/v6.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./img/glassesImage/v7.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./img/glassesImage/v8.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./img/glassesImage/v9.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]
    state = {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": "./img/glassesImage/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
    renderGlasses = () => {
        return this.GlassesList.map((glasses) => {
            return <div className='col-4' key={glasses.id} onClick={() => {
                this.thuKinh(glasses);
            }}>
                <img src={glasses.url} alt="" style={{ width: "100%" }} />
            </div>
        })
    }
    thuKinh = (glasses) => {
        let { id, price, name, url, desc } = glasses;
        // let newstate={
        //     id : id,
        //     price : price,
        //     name : name,
        //     url :url,
        //     desc:desc,
        // }
        this.setState({
            id: id,
            price: price,
            name: name,
            url: url,
            desc: desc,
        });
    }
    render() {
        return (
            <div className="container vglasses py-3">
                <div className="row  justify-content-between">
                    <div className="col-6 vglasses__left">
                        <div className="row" id="glasses">
                            <div className="col-12">
                                <h1 className="mb-2">Virtual Glasses</h1>
                            </div>
                        </div>
                        <div className="row" id="vglassesList">
                            {this.renderGlasses()};
                        </div>
                    </div>
                    <div className="col-5 vglasses__right p-0">
                        <div className="vglasses__card">
                            <div className="vglasses__model" id="avatar">
                                <div><img src={this.state.url} alt="" /></div>

                            </div>
                            <div id="glassesInfo" className="vglasses__info">
                                <div>
                                    <div className="text" style={{ color: '#fff' }}>{this.state.name}</div>
                                    <div className="text" style={{ backgroundColor: 'red', width: '8%', margin: '10px 0' }}>{this.state.price}</div>
                                    <div className="text">{this.state.desc}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
