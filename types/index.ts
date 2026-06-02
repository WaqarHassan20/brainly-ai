export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface FloatingCard {
  readonly platform: string;
  readonly label: string;
  readonly title: string;
  readonly icon: string;
  readonly position: {
    readonly top?: string;
    readonly bottom?: string;
    readonly left?: string;
    readonly right?: string;
  };
  readonly rotation?: number;
}

export interface TraditionalBookmark {
  readonly platform: string;
  readonly description: string;
}

export interface MemoryHubItem {
  readonly icon: string;
  readonly title: string;
  readonly subtitle: string;
  readonly tag: string;
  readonly tagColor: string;
}

export interface ArchitectureStep {
  readonly number: number;
  readonly title: string;
  readonly description: string;
}

export interface WorkflowStep {
  readonly number: string;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly layout: "left" | "right";
}

export interface VagueQuery {
  readonly id: number;
  readonly text: string;
}

export interface DemoResponse {
  readonly userQuery: string;
  readonly aiResponse: string;
  readonly resultPlatform: string;
  readonly resultTitle: string;
  readonly resultSnippet: string;
}

export interface FeatureCard {
  readonly title: string;
  readonly description: string;
  readonly visualType:
    | "semantic"
    | "crossPlatform"
    | "chromeExtension"
    | "lightning"
    | "privacy"
    | "userFriendly";
}

export interface ComparisonRow {
  readonly feature: string;
  readonly bookmarkIcon: string;
  readonly bookmarkText: string;
  readonly brainlyIcon: string;
  readonly brainlyText: string;
}

export interface FAQItem {
  readonly question: string;
  readonly answer: string;
}

export interface FooterLinkGroup {
  readonly title: string;
  readonly links: readonly { readonly label: string; readonly href: string }[];
}

export interface FloatingCardData {
  readonly id: string;
  readonly platform: string;
  readonly icon: string;
  readonly iconBg: string;
  readonly title: string;
  readonly className: string;
  readonly delay: number;
  readonly width: string;
  readonly likes?: string;
  readonly isLarge?: boolean;
  readonly isSearch?: boolean;
  readonly isTag?: boolean;
  readonly rotateClass?: string;
}
