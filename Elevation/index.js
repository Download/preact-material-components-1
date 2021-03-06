import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop mini = false
 * @prop plain = false
 */
export default class Elevation extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "elevation";
		this._mdcProps = [];
		for (let elevationIndex = 0; elevationIndex < 25; elevationIndex++){
			this._mdcProps.push("z" + elevationIndex);
		}
	}
	materialDom(props) {
		return (
			<p {...props} ref={control => this.control = control}>
				{props.children}
			</p>
		);
	}
}
