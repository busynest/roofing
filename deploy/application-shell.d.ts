import { CSSResult, LitElement, TemplateResult } from 'lit';
import { RootState } from './store.js';
import './primary-contract.js';
import './sub-contract.js';
import './purchase-order.js';
import './warranty-contract.js';
import './myicons.js';
declare const RoofingShell_base: (new (...args: any[]) => {
    _storeUnsubscribe: import("redux").Unsubscribe;
    connectedCallback(): void;
    disconnectedCallback(): void;
    stateChanged(_state: {
        app: import("./redux-general").AppState;
    }): void;
    readonly isConnected: boolean;
}) & typeof LitElement;
export declare class RoofingShell extends RoofingShell_base {
    page: string;
    constructor();
    stateChanged(state: RootState): void;
    static styles: CSSResult;
    handle: (e: any) => void;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "roofing-shell": RoofingShell;
    }
}
export {};
//# sourceMappingURL=application-shell.d.ts.map