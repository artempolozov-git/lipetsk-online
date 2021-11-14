<template>
  <div class="registration__main__container">
    <div class="title">Добро пожаловать в Липецк online!</div>
    <div class="subtitle">Находите новые места для отдыха и спорта</div>
    <!--registration form-->
    <form class="form__registration__wrapper" action="" method="POST">
      <div class="input__container">
        <div class="data-input">
          <input name="Фамилия" type="text" placeholder="Фамилия" required>
        </div>
        <div class="data-input indent">
          <input name="Имя" type="text" placeholder="Имя" required>
        </div>
        <div class="data-input">
          <input name="E-mail" type="text" placeholder="E-mail" required>
        </div>
        <p class="email-information">Электронную почту после регистрации необходимо подтвердить в личном кабинете,
        чтобы иметь возможность получать электронные чеки, билеты и уведомления</p>
        <div class="data-input">
          <input name="Телефон" type="number" placeholder="Телефон +7" required>
        </div>
        <div class="send-button">
          <input type="submit" value="Подтвердить">
        </div>
      </div>
    </form>
    <!--password form-->
    <form class="form__password__wrapper" action="" method="POST">
      <div class="data-input indent">
        <input name="Пароль" type="password" placeholder="Пароль" required>
      </div>
      <div class="data-input">
        <input name="Подтверждение пароля" type="password" placeholder="Подтверждение пароля" required>
      </div>
      <div class="agreement__block">
        <input name="Согласие" id="agreement" type="radio" value="Согласие">
        <label for="agreement">Я согласен с <span class="excretion">пользовательским соглашением</span></label>
      </div>
      <p class="authorization">Авторизация</p>
      <div class="send-button">
        <input type="submit" value="Зарегистрироваться">
      </div>
    </form>
  </div>
</template>

<script>
    export default {
        name: "Registration"
    }
</script>

<style scoped>
.registration__main__container {
  padding: 40px 80px 60px;
}
.title {
  font-weight: bold;
  font-size: 6vw;
  color: #0072B9;
  text-align: center;
}
.subtitle {
  padding: 0 30px;
  margin-top: 20px;
  color: #A4A4A3;
  font-size: 4vw;
  font-weight: bold;
  text-align: center;
}
.form__registration__wrapper {
  margin-top: 30px;
}
.data-input > input {
  width: 100%;
  height: 50px;
  font-size: 3vw;
  font-family: Roboto;
  border-radius: 15px;
  border: 1px #c3c3c2 solid;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 15px;
}
.email-information {
  color: #A4A4A3;
  margin-bottom: 30px;
  font-weight: bold;
}
.send-button > input {
  width: 100%;
  background-color: #00B1D6;
  padding: 15px;
  border-radius: 50px;
  color: white;
  font-size: 3vw;
  border: none;
  font-weight: bold;
}
.form__password__wrapper {
  margin-top: 20px;
}
.agreement__block > input {
  margin-right: 10px;
}
.agreement__block > label {
  color: #A4A4A3;
  font-weight: bold;
}
.excretion {
  color: #00B1D6;
}
.authorization {
  font-size: 4vw;
  color: #A4A4A3;
  font-weight: bold;
  text-align: center;
}
@media only screen and (max-width : 450px) {
  .registration__main__container {
    padding: 40px 50px;
  }
}
</style>