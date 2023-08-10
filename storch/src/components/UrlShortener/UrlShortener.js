import React, { useState, Component } from 'react';
import '../../App.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import FormErrors from '../FormErrors';

function UrlShortener () {
  const [formErrors, setFormErrors] = useState('')
  const [url, setUrl] = useState()
  const [shortendUrl, setShortenedUrl] = useState('')
  const [previousUrls, setPreviousUrls] = useState([])
  
  const shortenUrl = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      )
      const data = await response.json()

      setShortenedUrl(data.result.full_short_link);
      setPreviousUrls( [...previousUrls, data.result.full_short_link] );
    } catch (e) {
      alert(e)
      // setFormErrors(formErrors)
    }
};

  return (
    <div className="app">
      <div className='shortener'>
        <form onSubmit={shortenUrl}>
          <input
            placeholder='Shorten a link here...'
            value={url}
            onChange={(e) => setUrl(e.target.value)}/>
          <button>Submit</button>
          {/* <div className="panel panel-default">
            <FormErrors formErrors={formErrors} />
          </div> */}
        </form>
        {shortendUrl}
        {shortendUrl &&
        <div>
          <CopyToClipboard text={shortendUrl}>
            <button onClick={() => alert("The URL has been copied")}>Copy</button>
          </CopyToClipboard>
        </div>
        }

        <div className='urlhistory'>
          {previousUrls.map(url => {
            <div className='history'>
            <CopyToClipboard text={url}>
              <button onClick={() => alert("The URL has been copied")}>Copy</button>
            </CopyToClipboard>
          </div>
          })}
          {previousUrls}
        </div>
      </div>
    </div>
  );
}

export default UrlShortener;