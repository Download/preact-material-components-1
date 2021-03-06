import { h } from "preact";
import MaterialComponent from "../MaterialComponent";

/**
 * @prop fixed = false
 */
class Toolbar extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "toolbar";
		this._mdcProps = ["fixed"];
	}
	materialDom(props) {
		return (
			<header ref={control=>{this.control = control;}} {...props}>
				{props.children}
			</header>
		);
	}
}

/**
 * @prop align-end = false
 * @prop align-start = false
 */
class ToolbarSection extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "toolbar__section";
		this._mdcProps = ["align-start", "align-end"];
	}
	materialDom(props) {
		return (
			<section {...props}>
				{props.children}
			</section>
		);
	}
}

class ToolbarIcon extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "toolbal__icon";
		this._mdcProps = ["align-end"];
	}
	materialDom(props) {
		return (
				<a className="material-icons" {...props}>{props.children || 'menu'}</a>
		);
	}
}

/**
 * @prop title = ''
 */
class ToolbarTitle extends MaterialComponent {
	constructor() {
		super();
		this.componentName = "toolbar__title";
	}
	materialDom(props) {
		return (
				<span {...props}>{props.children}</span>
		);
	}
}

Toolbar.Section = ToolbarSection;
Toolbar.Icon = ToolbarIcon;
Toolbar.Title = ToolbarTitle;

export default Toolbar;