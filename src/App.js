import React from 'react';
class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    nom:'',
    salaire:'',
    taxes:'',
    remarque:''
  };
  this.handleSubmit=this.handleSubmit.bind(this);
}
onChange = e => {
  this.setState({ [e.target.name]:e.target.value});
};
handleSubmit(event)
{
  event.preventDefault();
  let salaire=this.state.salaire;
  let nom = this.state.nom;
  if(this.state.salaire!=='' && this.state.nom!=='')
  {
    let tx=0;
    if(salaire<1500)
    {
      tx=salaire*0.05;
    }
    else if(salaire<4000)
    tx=salaire*0.14;
    else
          tx=salaire*0.20;

        const taxe=<span>{nom} vos taxes: {Math.round(tx)} salaire net:<strong> {this.state.salaire-tx}</strong></span>
        this.setState({taxes:taxe})
  }


}
render()
{
  return( <div className="container">
    <div className="row">
<div className="col"></div>
<div className="col">
<h1 className="text-center">Calcule de salaire</h1>
<form onSubmit={this.handleSubmit}>
<div className="mb-3">
    <label className="form-label">Nom</label>
    <input type="text" className="form-control" value={this.state.nom} placeholder="Votre nom ici" name="nom" pattern='[A-Z a-z]{2,30}' onChange={this.onChange} ></input>
    
  </div>
<div className="mb-3">
    <label className="form-label">Salaire</label>
    <input type="number" className="form-control" value={this.state.salaire} placeholder="Votre salaire brute ici" name="salaire"  onChange={this.onChange} ></input>
    
  </div>
<div className="mb-3 text-center">
    <input type="submit" className="btn btn-primary" value="calculer" ></input>
  
  </div>
  <br></br>
    <br></br>
    <br></br>
    
  <div className='text-center'> {this.state.taxes}</div>

</form>



</div>
<div className="col"></div>
    </div>


  </div>
  );
}


}
export default App;