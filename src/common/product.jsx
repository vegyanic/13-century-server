import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../product.module.css';
import Header from './head';
import WhatsAppButton from './wpbtn';
import ImageZoom from './ImageZoom';

const Product = () => {
    const { model } = useParams();

    // Example colorCodes object mapping models to their color codes
    const colorCodes = {
        '0759': ['C1', 'C2', 'C3', 'C4'],
        '2002M': ['C1', 'C5'],
        '2155': ['C2', 'C4', 'C5'],
        '2370': ['C1', 'C2', 'C3', 'C5', 'C6'],
        '6324': ['C37', 'C93'],
        '6334': ['C1', 'C3', 'C4'],
        '6608': ['C1', 'C3', 'C4', 'C6'],
        '8070': ['C2', 'C3'],
        '9833': ['C1', 'C4', 'C5', 'C6'],
        '9834': ['C1', 'C2', 'C5', 'C6'],
        '29035': ['C3', 'C4', 'C6'],
        '2002':['C1','C5'],
    };

    const frameSize = {
        '0759': '56-16-145',
        '2002M': '54-18-148',
        '2155': '49-19-145',
        '2370': '56-20-143',
        '6324': '58-16-140',
        '6334': '56-16-140',
        '6608': '52-2-147',
        '8070': '58-15-141',
        '9833': '54-18-150',
        '9834': '54-16-150',
        '29035': '59-14-148'
    };

    const genderId = {
        '0759': 'Male',
        '29035': 'Male',
        '6608': 'Male',
        '6324': 'Male',
        '2002M': 'Male',
        '8070': 'Male',
        '6334': 'Male',
        '2155': 'Male',
        '9834': 'Male',
        '9833': 'Male',
        '2370': 'Male'
    };

    const [mainImage, setMainImage] = useState(`https://13-century.com/files/mens/${model}/${colorCodes[model]?.[0]}.png`);
    const [selectedColor, setSelectedColor] = useState(colorCodes[model]?.[0] || '');
    // eslint-disable-next-line no-unused-vars
    const [indiFrame, setFrameSize] = useState(frameSize[model] || '');
    // eslint-disable-next-line no-unused-vars
    const [gdId, setGdid] = useState(genderId[model] || '');
    // eslint-disable-next-line no-unused-vars
    const [productInfoTop, setProductInfoTop] = useState('150px');
    // eslint-disable-next-line no-unused-vars
    const [imgMaxHeight, setImgMaxHeight] = useState('');
    // eslint-disable-next-line no-unused-vars
    const selectedModel = {model}; // Replace with your dynamic model
    // eslint-disable-next-line no-use-before-define, no-unused-vars
    const selectedColorCode = {colorCodes}; // Replace with your dynamic color code

        

    useEffect(() => {
        const updatePdcClass = () => {
            const pdcElements = document.querySelectorAll('#pdc');
            if (window.innerWidth < 575) {
                pdcElements.forEach((element) => {
                    element.classList.add('col-11');
                    element.classList.remove('col');
                    element.classList.add('ms-3');
                    element.classList.remove('ms-5');
                    element.style.height = '200px'
                });
            } else {
                pdcElements.forEach((element) => {
                    element.classList.remove('col-11');
                    element.classList.add('col');
                    element.classList.remove("ms-3");
                    element.classList.add('ms-5');
                    element.style.height = ''
                });
            }
        };
        const updateStyles = () => {
            const pdcElements = document.querySelectorAll('.product-item-info');

            if (window.innerWidth < 575) {
                setProductInfoTop('20px');
                pdcElements.forEach((element) => {
                    element.style.maxHeight = '240px';
                    element.style.top = '20px'
                });
            } else {
                setProductInfoTop('150px');
                pdcElements.forEach((element) => {
                    element.style.maxHeight = ''; // Reset to normal height
                    element.style.top = '150px'
                });
            }
        };
        const updateImgStyles = () => {
            const pdcElements = document.querySelectorAll('#pd-image');
            if (window.innerWidth < 575) {
                pdcElements.forEach((element) => {
                    element.style.padding = '40px 0px 0px 0px';
                });
            } else {
                pdcElements.forEach((element) => {
                    element.style.padding = '220px 0px 0px 0px'
                })
            }
        }
        const updateColStyle = () => {
            const pdcElements = document.querySelectorAll('.product-item-pdc',);
            if (window.innerWidth < 575) {
                pdcElements.forEach((element) => {
                    element.style.height = '600px';
                });
            } else {
                pdcElements.forEach((element) => {
                    element.style.height = ''
                })
            }
        }
        const updateCStyle = () => {
            const pdcElements = document.querySelectorAll('#pdcx',);
            if (window.innerWidth < 575) {
                pdcElements.forEach((element) => {
                    element.style.padding= 'px 0px 0px 200px';
                });
            } else {
                pdcElements.forEach((element) => {
                    element.style.height = ''
                })
            }
        }
        

        updateStyles();
        window.addEventListener('resize', updateStyles);
        updateImgStyles();
        window.addEventListener('resize', updateImgStyles);

        updatePdcClass();
        window.addEventListener('resize', updatePdcClass);
        
        updateColStyle();
        window.addEventListener('resize',updateColStyle);
        updateCStyle();
        window.addEventListener('resize',updateCStyle);

        return () => {
            window.removeEventListener('resize', updatePdcClass);
            window.removeEventListener('resize', updateStyles);

        };
    }, []);

    const handleImageClick = (colorCode) => {
        const imageUrl = `https://13-century.com/files/mens/${model}/${colorCode}.png`;
        setMainImage(imageUrl);
        setSelectedColor(colorCode);
    };

    return (
        <main>
            <Header />
            <div className="product-item-pdc d-flex flex-row flex-wrap flex-md-nowrap" style={{height:'1400px'}} >
                <div id="pdc" className="col ms-5">
                    <ImageZoom id="pd-image" className="img-fluid" src={mainImage}  alt={model} />
                </div>
                <div id="pdcx" className="col">
                    <div className="product-item-info position-relative" >
                        <div className="product-title text">
                            <div className="d-grid justify-content-center text">
                                <h2>Model number</h2>
                                <h3 style={{ justifySelf: 'center' }}>{model}</h3>
                            </div>
                            <div className='text' style={{ width: 'max-content' }}>
                                <h6>Gender <span><p className='text'>{gdId}</p></span></h6>
                            </div>
                            
                            <h6>Frame Measurement <span><p className='text'>{indiFrame}</p></span></h6>
                            
                            <div className="option-group container-fluid">
                                <h6 className='text'>Color <span><p className='text'>{selectedColor}</p></span></h6>
                                <div className="row row-cols-3 g-3">
                                    {colorCodes[model]?.map((colorCode) => (
                                        <div className="col" key={colorCode} style={{minWidth: '33%'}}>
                                            <div className="card" onClick={() => handleImageClick(colorCode)} style={{minWidth: '33%'}}>
                                                <img className="img-thumbnail img-fluid" src={`https://13-century.com/files/mens/${model}/${colorCode}.png`} alt="Color option" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <WhatsAppButton/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Product;
