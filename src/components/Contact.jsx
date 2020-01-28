import React, { useState } from 'react';

const Contact = () => {

    const end = () => {
        alert('Message envoyé !')
    }

return(
<div id="contact" className="contact text-center p-5">
    <h3 className="text-uppercase serv">Contactez-moi !</h3>
<button className="btnContact" data-toggle="modal" data-target="#exampleModal">
  <span>Affichez le formulaire</span>
</button>
<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Formulaire de contact</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <div className="row">
            <div className="col-6">
                <input style={{margin: 5 + 'px', borderRadius: 20 + 'px', height: 35 + 'px'}} className="form" type="text" placeholder="Nom"/>
                <input style={{margin: 5 + 'px', borderRadius: 20 + 'px', height: 35 + 'px'}} className="form" type="text" placeholder="Email"/>
            </div>
            <div className="col-6">
                <input style={{margin: 5 + 'px', borderRadius: 20 + 'px', height: 35 + 'px'}} className="form" type="text" placeholder="Prénom"/>
                <select id="inputState" className="form-control" style={{margin: 5 + 'px', backgroundColor: 'rgb(0, 0, 0, 0.05)', borderRadius: 20 + 'px', height: 35 + 'px'}}>
                    <option selected>Choisir le sujet...</option>
                    <option>Bug</option>
                    <option>Idée</option>
                    <option>Amélioration</option>
                    <option>Contact</option>
                </select>
            </div>
        </div>
        <textarea style={{height: 100 + 'px', margin: 10 + 'px'}} className="form" name="" id="" cols="30" rows="10" placeholder="Tapez votre message ici..."></textarea>
        <button onClick={end} type="submit" className="btnContact"><span>Envoyez votre message !</span></button>
      </div>
    </div>
  </div>
</div>

</div>
)
}

export default Contact;