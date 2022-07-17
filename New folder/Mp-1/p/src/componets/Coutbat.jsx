import React, { useState } from 'react'
import './Coutbar.css'


function Coutbat() {
    const [toggle, setToggle] = useState(false);
    const [color, setColor] = useState();
    const [font, setFont] = useState();
    const [name, setName] = useState();
    const [btn, setBtn] = useState('Shop Now');
    const [link, setLink] = useState();
    const [value1, setValue1] = useState('Our anniversary will end in');
    const [value2, setValue2] = useState(' 30% off for all orders');
    const [display, setDisplay] = useState('block');
    const [bar, setBar] = useState(true);
    const [close,setClose]=useState('block');

    const reset = () =>{
        setValue1('Our anniversary will end in');
        setValue2(' 30% off for all orders');
        setBtn('Shop Now');
    }
    const btn1 = () => {
        setColor('black');
        setFont('white');
        setToggle(true);
        setName('Bold and Clear');
        reset();
    }
    const btn2 = () => {
        setColor('gray');
        setFont('#F0F0F0');
        setToggle(true);
        setName('Shades of Gray');
        reset();
    }
    const btn3 = () => {
        setColor('#DAC9C9');
        setFont('black');
        setToggle(true);
        setName('Bright and Elegant');
        reset();
    }
    const btn4 = () => {
        setColor('white');
        setFont('orange');
        setToggle(true);
        setName('It s Easy');
        reset();
    }
    const btn5 = () => {
        setColor('gold');
        setFont('#C05D00');
        setToggle(true);
        setName('Harvest Gold');
        reset();
    }
    const btn6 = () => {
        setColor('lightgreen');
        setFont('black');
        setToggle(true);
        setName('Good Mood');
        reset();
    }
    const btn7 = () => {
        setColor('#054DAC');
        setFont('white');
        setToggle(true);
        setName('Trust Me');
        reset();
    }
    const btn8 = () => {
        setColor('lightpink');
        setFont('#ef7b0f');
        setToggle(true);
        setName('Fairy Taie');
        reset();
    }
    const btn9 = () => {
        setColor('red');
        setFont('orange');
        setToggle(true);
        setName('Important Things');
        reset();
    }
    const click = () => {
        setLink('https://in.linkedin.com/')
    }
    const change = (e) => {
        const opton = e.target.value;
        if (opton === 'btn') {
            setDisplay('block');
            setBar(true);
            setLink('')
        } else if (opton === 'bar') {
            setDisplay('none');
            setBar(false)
            setLink('')
        } else {
            setDisplay('none');
            setBar(true);
            setLink('');
            setLink('none');
        }
    }
    return (
        <div>
            <div className='box-main'>
                <p>Basic template</p>
                <div className='btn-menu'>
                    <button className='btn-1' onClick={btn1}>Bold and Clear</button>
                    <button className='btn-2' onClick={btn2}>Shades of Gray</button>
                    <button className='btn-3' onClick={btn3}>Bright and Elegant</button>
                    <button className='btn-4' onClick={btn4}>It's Easy</button>
                    <button className='btn-5' onClick={btn5}>Harvest Gold</button>
                    <button className='btn-6' onClick={btn6}>Good Mood</button>
                    <button className='btn-7' onClick={btn7}>Trust Me</button>
                    <button className='btn-8' onClick={btn8}>Fairy Taie</button>
                    <button className='btn-9' onClick={btn9}>Important Things</button>
                </div>
            </div>
            {
                toggle ? (<div>
                    <div className='preview'>
                        <h2>Preview</h2>
                        {
                            bar ? (
                                <div className='prew-chg' style={{ backgroundColor: `${color}` }}>
                                     <p style={{ color: `${font}` }}> {value1} {new Date().toLocaleString()}{value2}</p>
                                     <button style={{ backgroundColor: `${font}`, color: `${color}`, display: `${display}` }} onClick={click} >{btn}</button>
                                     <span className="close" style={{ display: `${close}` }}>&times;</span>
                                 </div>
                                 ) 
                            : (
                                <div className='prew-chg click' style={{ backgroundColor: `${color}` }} onClick={click}>
                                     <p style={{ color: `${font}` }}> {value1} {new Date().toLocaleString()}{value2}</p>
                                     <button style={{ backgroundColor: `${font}`, color: `${color}`, display: `${display}` }} onClick={click} >{btn}</button>
                                     <span className="close" style={{ display: `${close}` }}>&times;</span>
                                 </div>
                            )
                        }

                    </div>
                    <div className='info'>
                        <div className='name'>
                            <p>Name</p>
                            <input type='text' value={name}></input>
                            <p className='down'>For your own internal reference. Only you can seen it</p>
                        </div>
                        <div className='timer'>
                            <div className='timer-tab'>
                                <p>Massage before timer:</p>
                                <input type='text' value={value1} onChange={(e) => setValue1(e.target.value)} />
                            </div>
                            <div className='timer-tab'>
                                <p>Massge after timer:</p>
                                <input type='text' value={value2} onChange={(e) => setValue2(e.target.value)} />
                            </div>
                        </div>
                        <div className='bar-button'>
                            <p>Bar Clickable</p>
                            <select onChange={change}>
                                <option value='btn'>Select</option>
                                <option value='btn'>Add button on the bar</option>
                                <option value='bar'>Make the entier bar Clickable</option>
                                <option value='none'>Do not make bar Clickable</option>
                            </select>
                            <p className='down'>A CLickable button will be displayed on the bar The button will be removed, and the bar will not have any link</p>
                        </div>
                        <div className='btn-text'>
                            <p>Button Text</p>
                            <input type='text' value={btn} onChange={(e) => setBtn(e.target.value)} />
                            <p className='down'>Tex on button</p>
                        </div>
                        <div className='link' style={{ display: `${link}` }}>
                            <p>Link URL</p>
                            <input type='text' value={link} />
                            <p className='down'>For your own internal reference. Only you can seen it</p>
                        </div>
                        <div className='close-btn'>
                            <p>Include the close button:</p>
                            <select onChange={(e)=>setClose(e.target.value)}>
                                <option value='block'>Yes</option>
                                <option value='none'>No</option>
                            </select>
                            <p className='down'>For your own internal reference. Only you can seen it</p>
                        </div>
                    </div>
                </div>) : (null)
            }
            
        </div>
    )
}

export default Coutbat