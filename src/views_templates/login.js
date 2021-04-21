export const login = `
<header-general></header-general>
<section class="register-login-container">
    <img src="/img/img-login.svg"/>
    <div class="container-form">
     <h2>Bienvenido !</h2>
     <button-action class="secondary"><img src="./img/google-icon.svg" style="width: 20px; margin-right: 5px;" slot="image"/><span slot="title">Continuar con Google</span></button-action> 
     <hr class="divider"/>
     <input-group type="email" placeholder="Ingrese su correo" id="email-login"><span slot="title">Correo electronico:</span></input-group>
     <input-group type="text" placeholder="Ingrese su contraseña" id="pass-login"><span slot="title">Contraseña:</span></input-group>
     <label><input type="checkbox"> Recuerdame </label>
     <button-action class="primary" id="btn-login"><span slot="title">Iniciar sesion</span></button-action>  
      <a href="/#register">¿No tienes cuenta? Registrate</a>
     <a href="#">¿Olvide la contraseña</a>
    </div>
</section>`;
