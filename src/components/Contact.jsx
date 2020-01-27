import React from 'react';

const Contact = () => {
return(
<div id="contact" className="contact text-center p-5">
    <h3 className="text-uppercase serv">Contactez-moi !</h3>
    <form className="container" action="">
        <div className="form-row">
            <div className="form-group col-md-6">
                <label for="inputNom4">Nom</label>
                <input type="text" className="form-control" id="inputNom4" placeholder="Nom"></input>
            </div>
            <div className="form-group col-md-6">
                <label for="inputPrenom4">Prénom</label>
                <input type="text" className="form-control" id="inputPrenom4" placeholder="Prénom"></input>
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Address</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCity">Ville</label>
                <input type="text" class="form-control" id="inputCity" placeholder="Ville"></input>
            </div>
            <div class="form-group col-md-4">
                <label for="inputState">N°: Boites</label>
                <select id="inputState" class="form-control">
                    <option selected>Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div class="form-group col-md-2">
                <label for="inputZip">Code postale</label>
                <input type="text" class="form-control" id="inputZip" placeholder="Code postale"></input>
            </div>
        </div>
        <div class="form-group">
            <label for="msg">Message :</label>
            <div>
                <textarea id="msg" name="user_message" placeholder="Veuillez saisir votre message."></textarea>
            </div>
            
        </div>
        <div class="form-group">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck"></input>
                <label class="form-check-label" for="gridCheck">
                    Validez
                </label>
            </div>
        </div>
        <button type="submit" class="btnContact"><span>Envoyez</span></button>
    </form>
</div>
)
}

export default Contact;