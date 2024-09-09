import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../product.module.css';
import Header from './head';
import WhatsAppButton from './wpbtn';
import ImageZoom from './ImageZoom';

const Producteyef = () => {
    const { model } = useParams();

    // Example colorCodes object mapping models to their color codes
    const colorCodes = {
        '1014':['C1','C2','C3'],
        '1024':['C1','C2','C3',],
        '1025':['C1','C2','C3'],
        '1028':['C1','C2','C3','C4'],
        '1030':['C1','C2','C3','C4','C5'],
        '1031':['C1','C2','C3','C4','C5'],
        '1033':['C1','C2','C3','C4','C5'],
        '5024':['C1','C2','C4','C5'],
        '6022':['C1','C3','C4','C5'],
        '7106':['C1','C3','C5'],
        '8617':['C3','C4','C5'],
        '8620':['C2','C3','C4','C5'],
        '10004':['C1','C3','C4','C5'],
        '10006':['C1','C3','C4','C5'],
        '10007':['C1','C3','C4','C5'],
        '10010':['C1','C3','C4','C5'],
      
    };

    const frameSize = {
        '1014':'54-19-145',
        '1024':'54-16-140',
        '1025':'55-16-143',
        '1028':'54-15-145',
        '1030':'51-18-148',
        '1031':'52-16-145',
        '1033':'52-19-148',
        '5024':'47-22-145',
        '6022':'56-13-145',
        '7106':'54-18-145',
        '8617':'55-15-145',
        '8620':'55-15-145',
        '10004':'54-16-145',
        '10006':'54-17-145',
        '10007':'52-17-145',
        '10010':'53-17-145',
    };

    const genderId = {
       '1014':'MALE',
        '1024':'MALE',
        '1025':'MALE',
        '1028':'MALE',
        '1030':'MALE',
        '1031':'MALE',
        '1033':'MALE',
        '5024':'MALE',
        '6022':'MALE',
        '7106':'MALE',
        '8617':'MALE',
        '8620':'MALE',
        '10004':'MALE',
        '10006':'MALE',
        '10007':'MALE',
        '10010':'MALE',
    };

    const [mainImage, setMainImage] = useState(`https://13-century.com/files/men/${model}/${colorCodes[model]?.[0]}.png`);
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
        const imageUrl = `https://13-century.com/files/men/${model}/${colorCode}.png`;
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
                                                <img className="img-thumbnail img-fluid" src={`https://13-century.com/files/men/${model}/${colorCode}.png`} alt="Color option" />
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

export default Producteyef;
