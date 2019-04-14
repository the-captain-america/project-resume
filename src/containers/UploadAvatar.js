import React, { Component } from "react";
import ButtonSimple from '../components/ButtonSimple';

class UploadAvatar extends React.Component {

	onButtonClick(event) {
		event.preventDefault();
		this.fileInput.click();
	}

	renderSave() {
		return (
				<div>
						<input
							className="input-hide"
							id={this.props.id}
							onChange={this.props.fileHandler}
							ref={(input) => this.fileInput = input}
							type="file" />
						<ButtonSimple
							label="Upload"
							onPress={this.onButtonClick.bind(this)} />
				</div>
		);
	}

	render() {
		return(
			<section>
				<div className="row">
				  <div className="col-md-4">
				    <span className="avatar-profile">
				      {this.props.imagePreview}
				    </span>
					</div>
					<div className="col-md-8">
						<h2>
							{ `${this.props.firstName} ${this.props.lastName}` }
						</h2>
						<p>{this.props.description}</p>
					</div>
				</div>
				{this.renderSave()}
      </section>
    );
  }
}

export default UploadAvatar;
