import React, {Component} from "react";

class Formfield extends Component {
	render() {
		return (
			<div className="field">
				<label className="label">{this.props.label}</label>
				<div className="control">
					<input
						className="input"
						type={this.props.type}
						placeholder={this.props.placeholder}
					></input>
				</div>
			</div>
		);
	}
}

export default Formfield;
