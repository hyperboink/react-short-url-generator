import React, { useState, useRef } from 'react'
import axios from 'axios'
import Loader from '../components/Loader'
import CopyToClipboard from 'react-copy-to-clipboard'
import { BASE_API, MESSAGE } from '../components/contants'

export default function Homepage() {
    const [urls, setUrls] = useState({})
    const [loading, setLoading] = useState(false)
    const [copiedTxt, setCopiedTxt] = useState('')
    const [copyMessage, setCopyMessage] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const shortenerRef = useRef()

    const shortenUrl = _ => {
        if(shortenerRef.current.value){
            setLoading(true)
            setErrorMsg('')

            axios.get(BASE_API + shortenerRef.current.value)
            .then(res => {
                setUrls(res.data)
                console.log(res.data)
                setLoading(false)
                setErrorMsg('')
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
                setErrorMsg(MESSAGE.error)
                setUrls({})
            })
        }
    }

    const copyHandler = text => {
        setCopiedTxt(text)
        setCopyMessage(MESSAGE.copied)
        setTimeout(() => {
            setCopyMessage('')
        }, 1000)
    }

    const onEnterHandler = e => {
        if (e.key === 'Enter') {
            shortenUrl()
            shortenerRef.current.blur()
        }
    }

    return (
        <div className="wrap">
            
            <div className="shortener-con flex">
                <div className="shortener-head">
                    <h1>Short URL Generator</h1>
                </div>
                
                <div className="shortener-input-field">
                    <input type="text" className="shortener-input placeholder" placeholder="Paste link here..." ref={shortenerRef} onKeyUp={onEnterHandler}/>
                    
                    {loading ? (
                        <Loader/>
                    ) : (
                        <button className="shortener-btn" onClick={shortenUrl}>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    )}
                </div>

                {loading ? (
                    <div className="shortener-progress">
                        <div className="shortener-progress-note">Generating short links</div>
                        <Loader type='dots'/>
                    </div>
                ) : ''}

                <div className="shortener-error error text-center">{errorMsg || ''}</div>

                <div className={'shortener-result' + (!loading && urls.ok ? ' show' : '')}>

                    {!loading && urls.ok ? (
                        <div className="short-links">
                            <ul>
                                <li>
                                    <span className="short-link-label">Short Link 1: </span>
                                    <span className="short-link-text">
                                        <span className={'short-link' + (copiedTxt === urls.result.short_link ? ' highlight' : '')}>{urls.result.short_link}</span>
                                        {copyMessage && copiedTxt === urls.result.short_link ? (
                                            <span className="short-link-copy-msg">{copyMessage}</span>
                                        ) : (
                                            <CopyToClipboard
                                                text={urls.result.short_link}
                                                onCopy={() => copyHandler(urls.result.short_link)}>
                                                <i className="short-link-copy fa fa-clipboard" aria-hidden="true"></i>
                                            </CopyToClipboard>
                                        )}
                                    </span>
                                </li>
                                <li>
                                    <span className="short-link-label">Short Link 2: </span>
                                    <span className="short-link-text">
                                        <span className={'short-link' + (copiedTxt === urls.result.short_link2 ? ' highlight' : '')}>{urls.result.short_link2}</span>
                                        {copyMessage && copiedTxt === urls.result.short_link2 ? (
                                            <span className="short-link-copy-msg">{copyMessage}</span>
                                        ) : (
                                            <CopyToClipboard
                                                text={urls.result.short_link2}
                                                onCopy={() => copyHandler(urls.result.short_link2)}>
                                                <i className="short-link-copy fa fa-clipboard" aria-hidden="true"></i>
                                            </CopyToClipboard>
                                        )}
                                    </span>
                                </li>
                                <li>
                                    <span className="short-link-label">Short Link 3: </span>
                                    <span className="short-link-text">
                                        <span className={'short-link' + (copiedTxt === urls.result.short_link3 ? ' highlight' : '')}>{urls.result.short_link3}</span>
                                        {copyMessage && copiedTxt === urls.result.short_link3 ? (
                                            <span className="short-link-copy-msg">{copyMessage}</span>
                                        ) : (
                                            <CopyToClipboard
                                                text={urls.result.short_link3}
                                                onCopy={() => copyHandler(urls.result.short_link3)}>
                                                <i className="short-link-copy fa fa-clipboard" aria-hidden="true"></i>
                                            </CopyToClipboard>
                                        )}
                                    </span>
                                </li>
                                <li>
                                    <span className="short-link-label">Full Short Link 1: </span>
                                    <span className="short-link-text">
                                        <span className={'short-link' + (copiedTxt === urls.result.full_short_link ? ' highlight' : '')}>{urls.result.full_short_link}</span>
                                        {copyMessage && copiedTxt === urls.result.full_short_link ? (
                                            <span className="short-link-copy-msg">{copyMessage}</span>
                                        ) : (
                                            <CopyToClipboard
                                                text={urls.result.full_short_link}
                                                onCopy={() => copyHandler(urls.result.full_short_link)}>
                                                <i className="short-link-copy fa fa-clipboard" aria-hidden="true"></i>
                                            </CopyToClipboard>
                                        )}
                                    </span>
                                </li>
                                <li>
                                    <span className="short-link-label">Full Short Link 2: </span>
                                    <span className="short-link-text">
                                        <span className={'short-link' + (copiedTxt === urls.result.full_short_link2 ? ' highlight' : '')}>{urls.result.full_short_link2}</span>
                                        {copyMessage && copiedTxt === urls.result.full_short_link2 ? (
                                            <span className="short-link-copy-msg">{copyMessage}</span>
                                        ) : (
                                            <CopyToClipboard
                                                text={urls.result.full_short_link2}
                                                onCopy={() => copyHandler(urls.result.full_short_link2)}>
                                                <i className="short-link-copy fa fa-clipboard" aria-hidden="true"></i>
                                            </CopyToClipboard>
                                        )}
                                    </span>
                                </li>
                                <li>
                                    <span className="short-link-label">Full Short Link 3: </span>
                                    <span className="short-link-text">
                                        <span className={'short-link' + (copiedTxt === urls.result.full_short_link3 ? ' highlight' : '')}>{urls.result.full_short_link3}</span>
                                        
                                        {copyMessage && copiedTxt === urls.result.full_short_link3 ? (
                                            <span className="short-link-copy-msg">{copyMessage}</span>
                                        ) : (
                                            <CopyToClipboard
                                                text={urls.result.full_short_link3}
                                                onCopy={() => copyHandler(urls.result.full_short_link3)}>
                                                <i className="short-link-copy fa fa-clipboard" aria-hidden="true"></i>
                                            </CopyToClipboard>
                                        )}
                                    </span>
                                </li>
                                
                            </ul>
                        </div>
                    ) : ''}
                    
                </div>
            </div>

        </div>
    )
}
