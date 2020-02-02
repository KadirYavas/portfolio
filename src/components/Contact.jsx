import React, {useEffect, useState} from 'react';

const Contact = () => {

const end = () => {

alert('Votre message a été envoyé !')
}
const [vide, setVide] = useState('')
const [videDeux, setVideDeux] = useState('')
const [text, setText] = useState('')
const clean = () => {
setVide('')
setVideDeux('')
setText('')
}

const [tit, setTit] = useState('hiddens')

useEffect(() => {
window.addEventListener('scroll', () => {
if(window.scrollY > 2750){
setTit('animated slideInUp')
}
})
})

return(
<div id="contact" className="contact text-center p-5">
  <h3 className={"text-uppercase serv " + tit}>Contactez-moi !</h3>
  <button className=" btnContact" data-toggle="modal" data-target="#exampleModal">
    <span>Affichez le formulaire</span>
    </button>
    <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Formulaire de contact</h5>
            <button onClick={clean} type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input value={vide} onChange={(e)=> setVide(e.target.value)} type="email" className="form-control"
                id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder="Entrez une adresse mail"></input>
              </div>
              <div className="form-group">
                <label for="exampleInputText1">Nom</label>
                <input value={videDeux} onChange={(e)=> setVideDeux(e.target.value)} type="tex" className="form-control"
                id="exampleInputText1" placeholder="Entrez un nom"></input>
              </div>
              <div className="form-group">
                <select name="" id="inputState">
                  <option selected>Raisons...</option>
                  <option>Bug</option>
                  <option>Message</option>
                  <option>Amélioration</option>
                </select>
              </div>
              <div className="from-group">
                <label for="exampleInputText2">Message</label>
                <textarea value={text}
                  onChange={(e)=> setText(e.target.value)} name="" id="" cols="45" rows="5" placeholder="Saisir votre message ici..."></textarea>
              </div>
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                <label className="form-check-label" for="exampleCheck1">N'oubliez pas de validez !</label>
              </div>
            </form>
            <button onClick={end} type="submit" className="btnContact"><span>Envoyez votre message !</span></button>
          </div>
        </div>
      </div>
    </div>

</div>
)
}

export default Contact;