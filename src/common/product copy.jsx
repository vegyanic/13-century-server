import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../product.module.css';
import Header from './head';
import WhatsAppButton from './wpbtn';
import ImageZoom from './ImageZoom';

const Productf = () => {
    const { model } = useParams();

    // Example colorCodes object mapping models to their color codes
    const colorCodes = {
        '2170': ['C54', 'C56', 'C106'],
        '2002': ['C1', 'C5'],
        '6337': ['C1', 'C2', 'C35', 'C36'],
        '6351': ['C1', 'C2', 'C8'],
        '7005': ['C1', 'C10', 'C15'],
        '7436': ['C3', 'C4', 'C5'],
        '7479': ['C1', 'C2', 'C4', 'C9'],
        '8816': ['C1', 'C4', 'C5'],
    };

    const frameSize = {
        '2170': '52-19-145',
        '2002': '54-18-148',
        '6337': '58-16-142',
        '6351': '61-15-144',
        '7005': '61-14-145',
        '7436': '58-17-140',
        '7479': '54-14-146',
        '8816': '53-19-145',
    };

    const genderId = {
        '2170': 'FEMALE',
        '2002': 'FEMALE',
        '6337': 'FEMALE',
        '6351': 'FEMALE',
        '7005': 'FEMALE',
        '7436': 'FEMALE',
        '7479': 'FEMALE',
        '8816': 'FEMALE',
    };

    const [mainImage, setMainImage] = useState(`https://13-century.com/files/womens/${model}/${colorCodes[model]?.[0]}.png`);
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
        const imageUrl = `https://13-century.com/files/womens/${model}/${colorCode}.png`;
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
                                                <img className="img-thumbnail img-fluid" src={`https://13-century.com/files/womens/${model}/${colorCode}.png`} alt="Color option" />
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

export default Productf;
