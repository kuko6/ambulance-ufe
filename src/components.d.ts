/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface JapoAmbulanceWlApp {
        "ambulanceId": string;
        "apiBase": string;
        "basePath": string;
    }
    interface JapoAmbulanceWlEditor {
        "ambulanceId": string;
        "apiBase": string;
        "entryId": string;
    }
    interface JapoAmbulanceWlList {
        "ambulanceId": string;
        "apiBase": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
export interface JapoAmbulanceWlEditorCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLJapoAmbulanceWlEditorElement;
}
export interface JapoAmbulanceWlListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLJapoAmbulanceWlListElement;
}
declare global {
    interface HTMLJapoAmbulanceWlAppElement extends Components.JapoAmbulanceWlApp, HTMLStencilElement {
    }
    var HTMLJapoAmbulanceWlAppElement: {
        prototype: HTMLJapoAmbulanceWlAppElement;
        new (): HTMLJapoAmbulanceWlAppElement;
    };
    interface HTMLJapoAmbulanceWlEditorElementEventMap {
        "editor-closed": string;
    }
    interface HTMLJapoAmbulanceWlEditorElement extends Components.JapoAmbulanceWlEditor, HTMLStencilElement {
        addEventListener<K extends keyof HTMLJapoAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLJapoAmbulanceWlEditorElement, ev: JapoAmbulanceWlEditorCustomEvent<HTMLJapoAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLJapoAmbulanceWlEditorElementEventMap>(type: K, listener: (this: HTMLJapoAmbulanceWlEditorElement, ev: JapoAmbulanceWlEditorCustomEvent<HTMLJapoAmbulanceWlEditorElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLJapoAmbulanceWlEditorElement: {
        prototype: HTMLJapoAmbulanceWlEditorElement;
        new (): HTMLJapoAmbulanceWlEditorElement;
    };
    interface HTMLJapoAmbulanceWlListElementEventMap {
        "entry-clicked": string;
    }
    interface HTMLJapoAmbulanceWlListElement extends Components.JapoAmbulanceWlList, HTMLStencilElement {
        addEventListener<K extends keyof HTMLJapoAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLJapoAmbulanceWlListElement, ev: JapoAmbulanceWlListCustomEvent<HTMLJapoAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLJapoAmbulanceWlListElementEventMap>(type: K, listener: (this: HTMLJapoAmbulanceWlListElement, ev: JapoAmbulanceWlListCustomEvent<HTMLJapoAmbulanceWlListElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLJapoAmbulanceWlListElement: {
        prototype: HTMLJapoAmbulanceWlListElement;
        new (): HTMLJapoAmbulanceWlListElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "japo-ambulance-wl-app": HTMLJapoAmbulanceWlAppElement;
        "japo-ambulance-wl-editor": HTMLJapoAmbulanceWlEditorElement;
        "japo-ambulance-wl-list": HTMLJapoAmbulanceWlListElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface JapoAmbulanceWlApp {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "basePath"?: string;
    }
    interface JapoAmbulanceWlEditor {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "entryId"?: string;
        "onEditor-closed"?: (event: JapoAmbulanceWlEditorCustomEvent<string>) => void;
    }
    interface JapoAmbulanceWlList {
        "ambulanceId"?: string;
        "apiBase"?: string;
        "onEntry-clicked"?: (event: JapoAmbulanceWlListCustomEvent<string>) => void;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "japo-ambulance-wl-app": JapoAmbulanceWlApp;
        "japo-ambulance-wl-editor": JapoAmbulanceWlEditor;
        "japo-ambulance-wl-list": JapoAmbulanceWlList;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "japo-ambulance-wl-app": LocalJSX.JapoAmbulanceWlApp & JSXBase.HTMLAttributes<HTMLJapoAmbulanceWlAppElement>;
            "japo-ambulance-wl-editor": LocalJSX.JapoAmbulanceWlEditor & JSXBase.HTMLAttributes<HTMLJapoAmbulanceWlEditorElement>;
            "japo-ambulance-wl-list": LocalJSX.JapoAmbulanceWlList & JSXBase.HTMLAttributes<HTMLJapoAmbulanceWlListElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}
