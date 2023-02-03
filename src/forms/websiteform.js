import React, { useState } from 'react';
import './form.css';

const Form = (props) => {
  const [name, setName] = useState(props.name||'');
  const [description, setDescription] = useState(props.description||'');
  const [url, setURL] = useState(props.url||'');
  const [icon, setIcon] = useState(props.icon||'');
  const newWebsite = [{name: name, description: description, url: url, icon: icon || 'https://picsum.photos/800/800', clicks: props.clicks || 0}]

  const handleSubmit = () => {
    if (!name || !description || !url) {
      return;
    }
    const index = props.websites.findIndex(website => website.name === props.name);
    const edittedWebsites = props.websites.filter(website => website !== props.websites[index]);
    props.setWebsites(newWebsite.concat(edittedWebsites))
    props.setShowForm(false);
    resetValues()
  };

  const resetValues = ()=> {
    setName(props.name||'');
    setDescription(props.description||'');
    setURL(props.url||'');
    setIcon(props.icon||'');
  }


  return (
    <div>
      {props.showForm && (
        <>
          <div className="backdrop"></div>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="text"
              placeholder="Task Name"
              maxLength={20}
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            /> <br/>
            <input
              type="text"
              placeholder="description"
              required
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            /> <br/>
            <input
              type="text"
              placeholder="url"
              required
              value={url}
              onChange={(event) => setURL(event.target.value)}
            /> <br/>
            <input
              type="text"
              placeholder="icon-url"
              value={icon}
              onChange={(event) => setIcon(event.target.value)}
            /> <br/>
            <button type="submit">{props.saveButton}</button>
            <button onClick={() => {props.setShowForm(false);resetValues()}}>cancel</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Form;