export function collapsePanel(ref: ImperativePanelHandle | null) {
  if (ref) {
    if (ref.isCollapsed()) {
      ref.expand();
    } else {
      ref.collapse();
    }
  }
}

export type ImperativePanelHandle = {
  collapse: () => void;
  expand: () => void;
  getId(): string;
  getSize(): number;
  isCollapsed: () => boolean;
  isExpanded: () => boolean;
  resize: (size: number) => void;
};
