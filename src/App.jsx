import React from 'react';

import './App.scss';

export class App extends React.Component {
  state = {
    username: '',
    password: '',
    aboutMe: '',
    sex: '',
    color: '',
    willRemember: true,
  };

  formHandler = (event) => {
    const { name, value, type, checked } = event.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  }

  render() {
    return (
      <div className="App">
        <form
          className="form"
          action="/"
          method="POST"
          onSubmit={(event) => {
            event.preventDefault();

            // eslint-disable-next-line no-console
            console.log(this.state);
          }}
        >
          <input
            type="text"
            name="username"
            className="form__field"
            placeholder="Username"
            onChange={this.formHandler}
          />
          <input
            type="password"
            name="password"
            className="form__field"
            placeholder="Password"
            onChange={this.formHandler}
          />
          <textarea
            name="aboutMe"
            className="form__field"
            placeholder="About me..."
            value={this.state.aboutMe}
            onChange={this.formHandler}
          />
          <div className="sex-chooser form__field">
            <input
              type="radio"
              name="sex"
              id="sex_m"
              value="m"
              checked={this.state.sex === 'm'}
              onChange={this.formHandler}
            />
            <label htmlFor="sex_m">Male</label>
            <input
              type="radio"
              name="sex"
              id="sex_f"
              value="f"
              checked={this.state.sex === 'f'}
              onChange={this.formHandler}
            />
            <label htmlFor="sex_f">Female</label>
          </div>
          <select
            name="color"
            className="form__field"
            onChange={this.formHandler}
          >
            <option value="">
              Choose a color
            </option>
            <option value="red">
              Red
            </option>
            <option value="green">
              Green
            </option>
            <option value="blue">
              Blue
            </option>
          </select>
          <div className="check-container form__field">
            <input
              type="checkbox"
              name="willRemember"
              id="remember"
              checked={this.state.willRemember}
              onChange={this.formHandler}
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button type="submit" className="form__submit-button">Submit</button>
        </form>
      </div>
    );
  }
}
