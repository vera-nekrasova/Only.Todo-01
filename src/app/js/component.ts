export type ComponentProps = {
    name: string;
    component: Element;
}

namespace Component {
    export class Default {
        nRootName: string;
        nRoot: Element;
    
        constructor({ name, component }: ComponentProps) {
            this.nRootName = name;
            this.nRoot = component;
        }

        getElement = (name: string) => {
            return this.nRoot.querySelector(`.${this.nRootName}__${name}`);
        }
    
        getElements = (name: string) => {
            return this.nRoot.querySelectorAll(`.${this.nRootName}__${name}`);
        }
    }

    interface getComponentProps {
        name: string,
        component: Element
    }

    export const getComponent = (name: string): getComponentProps => ({
        name,
        component: document.querySelector(`.${name}`)
    })

    export const getComponents = (name: string): getComponentProps[] =>
        Array.from(document.querySelectorAll(`.${name}`))
            .map((component: Element) => ({
                name,
                component
            }));
}

export const { getComponent, getComponents } = Component;
export default Component;