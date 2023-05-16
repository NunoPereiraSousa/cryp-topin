// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Footer documents */
interface FooterDocumentData {
  /**
   * Logo field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismicT.ImageField<never>;
  /**
   * Description field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Socials Label field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  socials_label: prismicT.RichTextField;
  /**
   * Socials field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  socials: prismicT.GroupField<Simplify<FooterDocumentDataSocialsItem>>;
  /**
   * Terms field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.terms[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  terms: prismicT.GroupField<Simplify<FooterDocumentDataTermsItem>>;
  /**
   * Copyright field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.copyright
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  copyright: prismicT.RichTextField;
  /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<FooterDocumentDataSlicesSlice>;
}
/**
 * Item in Footer → Socials
 *
 */
export interface FooterDocumentDataSocialsItem {
  /**
   * Icon field in *Footer → Socials*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].icon
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  icon: prismicT.ImageField<never>;
  /**
   * Link field in *Footer → Socials*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.socials[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismicT.LinkField;
}
/**
 * Item in Footer → Terms
 *
 */
export interface FooterDocumentDataTermsItem {
  /**
   * Headline field in *Footer → Terms*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.terms[].headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismicT.RichTextField;
  /**
   * Description field in *Footer → Terms*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.terms[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Description 2 field in *Footer → Terms*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.terms[].description_2
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description_2: prismicT.RichTextField;
  /**
   * Disclaimer field in *Footer → Terms*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.terms[].disclaimer
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  disclaimer: prismicT.RichTextField;
  /**
   * Disclaimer Background Color field in *Footer → Terms*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.terms[].disclaimer_background_color
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  disclaimer_background_color: prismicT.ColorField;
  /**
   * Disclaimer Text Color field in *Footer → Terms*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.terms[].disclaimer_text_color
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  disclaimer_text_color: prismicT.ColorField;
}
/**
 * Slice for *Footer → Slice Zone*
 *
 */
type FooterDocumentDataSlicesSlice = never;
/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;
/** Content for Homepage documents */
interface HomepageDocumentData {
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice =
  | HeroSlice
  | BecomeATraderSlice
  | HighlightedArticlesSlice
  | HighlightSlice
  | NewsletterSlice
  | StatisticsSlice
  | SponsorsSlice
  | PossibilitiesSlice
  | StepByStepSlice
  | TestimonialSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismicT.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;
export type AllDocumentTypes = FooterDocument | HomepageDocument;
/**
 * Primary content in BecomeATrader → Primary
 *
 */
interface BecomeATraderSliceDefaultPrimary {
  /**
   * Headline field in *BecomeATrader → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: become_a_trader.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismicT.RichTextField;
  /**
   * Highlighted Word Color field in *BecomeATrader → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: become_a_trader.primary.highlighted_word_color
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  highlighted_word_color: prismicT.ColorField;
  /**
   * Image field in *BecomeATrader → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: become_a_trader.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
}
/**
 * Item in BecomeATrader → Items
 *
 */
export interface BecomeATraderSliceDefaultItem {
  /**
   * Icon field in *BecomeATrader → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: become_a_trader.items[].icon
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  icon: prismicT.ImageField<never>;
  /**
   * Headline field in *BecomeATrader → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: become_a_trader.items[].headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismicT.RichTextField;
  /**
   * Description field in *BecomeATrader → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: become_a_trader.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
}
/**
 * Default variation for BecomeATrader Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BecomeATraderSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<BecomeATraderSliceDefaultPrimary>,
  Simplify<BecomeATraderSliceDefaultItem>
>;
/**
 * Slice variation for *BecomeATrader*
 *
 */
type BecomeATraderSliceVariation = BecomeATraderSliceDefault;
/**
 * BecomeATrader Shared Slice
 *
 * - **API ID**: `become_a_trader`
 * - **Description**: `BecomeATrader`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BecomeATraderSlice = prismicT.SharedSlice<
  "become_a_trader",
  BecomeATraderSliceVariation
>;
/**
 * Primary content in FooterItem → Primary
 *
 */
interface FooterItemSliceDefaultPrimary {
  /**
   * Headline field in *FooterItem → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_item.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismicT.RichTextField;
}
/**
 * Item in FooterItem → Items
 *
 */
export interface FooterItemSliceDefaultItem {
  /**
   * Link field in *FooterItem → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_item.items[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismicT.LinkField;
  /**
   * Link Label field in *FooterItem → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer_item.items[].link_label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  link_label: prismicT.RichTextField;
}
/**
 * Default variation for FooterItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterItemSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<FooterItemSliceDefaultPrimary>,
  Simplify<FooterItemSliceDefaultItem>
>;
/**
 * Slice variation for *FooterItem*
 *
 */
type FooterItemSliceVariation = FooterItemSliceDefault;
/**
 * FooterItem Shared Slice
 *
 * - **API ID**: `footer_item`
 * - **Description**: `FooterItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type FooterItemSlice = prismicT.SharedSlice<
  "footer_item",
  FooterItemSliceVariation
>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * Tag field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.tag
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  tag: prismicT.RichTextField;
  /**
   * Tag Text Color field in *Hero → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.tag_text_color
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  tag_text_color: prismicT.ColorField;
  /**
   * Tag Color field in *Hero → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.tag_color
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  tag_color: prismicT.ColorField;
  /**
   * Headline field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismicT.RichTextField;
  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Button Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismicT.LinkField;
  /**
   * Button Label field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button_label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  button_label: prismicT.RichTextField;
  /**
   * Hero Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.hero_image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  hero_image: prismicT.ImageField<never>;
}
/**
 * Item in Hero → Items
 *
 */
export interface HeroSliceDefaultItem {
  /**
   * Image field in *Hero → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  Simplify<HeroSliceDefaultItem>
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismicT.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in Highlight → Primary
 *
 */
interface HighlightSliceDefaultPrimary {
  /**
   * Label field in *Highlight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.primary.label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label: prismicT.RichTextField;
  /**
   * Button Label field in *Highlight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.primary.button_label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  button_label: prismicT.RichTextField;
  /**
   * Button Link field in *Highlight → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.primary.button_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismicT.LinkField;
  /**
   * Headline field in *Highlight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismicT.RichTextField;
  /**
   * Description field in *Highlight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Image field in *Highlight → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
}
/**
 * Item in Highlight → Items
 *
 */
export interface HighlightSliceDefaultItem {
  /**
   * Description field in *Highlight → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Icon field in *Highlight → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.items[].icon
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  icon: prismicT.ImageField<never>;
}
/**
 * Default variation for Highlight Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HighlightSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<HighlightSliceDefaultPrimary>,
  Simplify<HighlightSliceDefaultItem>
>;
/**
 * Primary content in Highlight → Primary
 *
 */
interface HighlightSliceHighlightMobileAppPrimary {
  /**
   * Headline field in *Highlight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismicT.RichTextField;
  /**
   * Description field in *Highlight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Highlighted Word Color field in *Highlight → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.primary.highlighted_word_color
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  highlighted_word_color: prismicT.ColorField;
  /**
   * Image field in *Highlight → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * QR Code field in *Highlight → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.primary.qr_code
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  qr_code: prismicT.ImageField<never>;
  /**
   * Sub Headline field in *Highlight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.primary.sub_headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  sub_headline: prismicT.RichTextField;
  /**
   * Label field in *Highlight → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.primary.label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  label: prismicT.RichTextField;
}
/**
 * Item in Highlight → Items
 *
 */
export interface HighlightSliceHighlightMobileAppItem {
  /**
   * Icon field in *Highlight → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.items[].icon
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  icon: prismicT.ImageField<never>;
  /**
   * Button Link field in *Highlight → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: highlight.items[].button_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismicT.LinkField;
}
/**
 * HighlightMobileApp variation for Highlight Slice
 *
 * - **API ID**: `highlightMobileApp`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HighlightSliceHighlightMobileApp = prismicT.SharedSliceVariation<
  "highlightMobileApp",
  Simplify<HighlightSliceHighlightMobileAppPrimary>,
  Simplify<HighlightSliceHighlightMobileAppItem>
>;
/**
 * Slice variation for *Highlight*
 *
 */
type HighlightSliceVariation =
  | HighlightSliceDefault
  | HighlightSliceHighlightMobileApp;
/**
 * Highlight Shared Slice
 *
 * - **API ID**: `highlight`
 * - **Description**: `Highlight`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HighlightSlice = prismicT.SharedSlice<
  "highlight",
  HighlightSliceVariation
>;
/**
 * Primary content in HighlightedArticles → Primary
 *
 */
interface HighlightedArticlesSliceDefaultPrimary {
  /**
   * Headline field in *HighlightedArticles → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: highlighted_articles.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismicT.RichTextField;
  /**
   * Highlighted Word Color field in *HighlightedArticles → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: highlighted_articles.primary.highlighted_word_color
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  highlighted_word_color: prismicT.ColorField;
}
/**
 * Default variation for HighlightedArticles Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HighlightedArticlesSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<HighlightedArticlesSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *HighlightedArticles*
 *
 */
type HighlightedArticlesSliceVariation = HighlightedArticlesSliceDefault;
/**
 * HighlightedArticles Shared Slice
 *
 * - **API ID**: `highlighted_articles`
 * - **Description**: `HighlightedArticles`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HighlightedArticlesSlice = prismicT.SharedSlice<
  "highlighted_articles",
  HighlightedArticlesSliceVariation
>;
/**
 * Primary content in Newsletter → Primary
 *
 */
interface NewsletterSliceDefaultPrimary {
  /**
   * Headline field in *Newsletter → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismicT.RichTextField;
  /**
   * Highlighted Word Color field in *Newsletter → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.highlighted_word_color
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  highlighted_word_color: prismicT.ColorField;
  /**
   * Image field in *Newsletter → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * Input Label field in *Newsletter → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.input_label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  input_label: prismicT.KeyTextField;
  /**
   * Button Label field in *Newsletter → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter.primary.button_label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  button_label: prismicT.RichTextField;
}
/**
 * Default variation for Newsletter Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NewsletterSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<NewsletterSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Newsletter*
 *
 */
type NewsletterSliceVariation = NewsletterSliceDefault;
/**
 * Newsletter Shared Slice
 *
 * - **API ID**: `newsletter`
 * - **Description**: `Newsletter`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NewsletterSlice = prismicT.SharedSlice<
  "newsletter",
  NewsletterSliceVariation
>;
/**
 * Primary content in Possibilities → Primary
 *
 */
interface PossibilitiesSliceDefaultPrimary {
  /**
   * Headline field in *Possibilities → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: possibilities.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismicT.RichTextField;
  /**
   * Highlighted Word Color field in *Possibilities → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: possibilities.primary.highlighted_word_color
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  highlighted_word_color: prismicT.ColorField;
  /**
   * Description field in *Possibilities → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: possibilities.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Image field in *Possibilities → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: possibilities.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * Button Link field in *Possibilities → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: possibilities.primary.button_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismicT.LinkField;
  /**
   * Button Label field in *Possibilities → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: possibilities.primary.button_label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  button_label: prismicT.RichTextField;
}
/**
 * Item in Possibilities → Items
 *
 */
export interface PossibilitiesSliceDefaultItem {
  /**
   * Description field in *Possibilities → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: possibilities.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Color field in *Possibilities → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: possibilities.items[].color
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  color: prismicT.ColorField;
  /**
   * Background Color field in *Possibilities → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: possibilities.items[].background_color
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  background_color: prismicT.ColorField;
  /**
   * Icon field in *Possibilities → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: possibilities.items[].icon
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  icon: prismicT.ImageField<never>;
}
/**
 * Default variation for Possibilities Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PossibilitiesSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<PossibilitiesSliceDefaultPrimary>,
  Simplify<PossibilitiesSliceDefaultItem>
>;
/**
 * Slice variation for *Possibilities*
 *
 */
type PossibilitiesSliceVariation = PossibilitiesSliceDefault;
/**
 * Possibilities Shared Slice
 *
 * - **API ID**: `possibilities`
 * - **Description**: `Possibilities`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type PossibilitiesSlice = prismicT.SharedSlice<
  "possibilities",
  PossibilitiesSliceVariation
>;
/**
 * Item in Sponsors → Items
 *
 */
export interface SponsorsSliceDefaultItem {
  /**
   * Logo field in *Sponsors → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: sponsors.items[].logo
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismicT.ImageField<never>;
}
/**
 * Default variation for Sponsors Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SponsorsSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<SponsorsSliceDefaultItem>
>;
/**
 * Slice variation for *Sponsors*
 *
 */
type SponsorsSliceVariation = SponsorsSliceDefault;
/**
 * Sponsors Shared Slice
 *
 * - **API ID**: `sponsors`
 * - **Description**: `Sponsors`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SponsorsSlice = prismicT.SharedSlice<
  "sponsors",
  SponsorsSliceVariation
>;
/**
 * Primary content in Statistics → Primary
 *
 */
interface StatisticsSliceDefaultPrimary {
  /**
   * Image field in *Statistics → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.primary.image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
}
/**
 * Item in Statistics → Items
 *
 */
export interface StatisticsSliceDefaultItem {
  /**
   * Number field in *Statistics → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.items[].number
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  number: prismicT.RichTextField;
  /**
   * Sign field in *Statistics → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.items[].sign
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  sign: prismicT.RichTextField;
  /**
   * Sign Color field in *Statistics → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.items[].sign_color
   * - **Documentation**: https://prismic.io/docs/core-concepts/color
   *
   */
  sign_color: prismicT.ColorField;
  /**
   * Description field in *Statistics → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: statistics.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
}
/**
 * Default variation for Statistics Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type StatisticsSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<StatisticsSliceDefaultPrimary>,
  Simplify<StatisticsSliceDefaultItem>
>;
/**
 * Slice variation for *Statistics*
 *
 */
type StatisticsSliceVariation = StatisticsSliceDefault;
/**
 * Statistics Shared Slice
 *
 * - **API ID**: `statistics`
 * - **Description**: `Statistics`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type StatisticsSlice = prismicT.SharedSlice<
  "statistics",
  StatisticsSliceVariation
>;
/**
 * Primary content in StepByStep → Primary
 *
 */
interface StepByStepSliceDefaultPrimary {
  /**
   * Headline field in *StepByStep → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: step_by_step.primary.headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismicT.RichTextField;
}
/**
 * Item in StepByStep → Items
 *
 */
export interface StepByStepSliceDefaultItem {
  /**
   * Image field in *StepByStep → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: step_by_step.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismicT.ImageField<never>;
  /**
   * Headline field in *StepByStep → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: step_by_step.items[].headline
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  headline: prismicT.RichTextField;
  /**
   * Description field in *StepByStep → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: step_by_step.items[].description
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismicT.RichTextField;
  /**
   * Order field in *StepByStep → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: step_by_step.items[].order
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  order: prismicT.BooleanField;
  /**
   * Button Label field in *StepByStep → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: step_by_step.items[].button_label
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  button_label: prismicT.RichTextField;
  /**
   * Button Link field in *StepByStep → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: step_by_step.items[].button_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  button_link: prismicT.LinkField;
}
/**
 * Default variation for StepByStep Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type StepByStepSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Simplify<StepByStepSliceDefaultPrimary>,
  Simplify<StepByStepSliceDefaultItem>
>;
/**
 * Slice variation for *StepByStep*
 *
 */
type StepByStepSliceVariation = StepByStepSliceDefault;
/**
 * StepByStep Shared Slice
 *
 * - **API ID**: `step_by_step`
 * - **Description**: `StepByStep`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type StepByStepSlice = prismicT.SharedSlice<
  "step_by_step",
  StepByStepSliceVariation
>;
/**
 * Default variation for Testimonial Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimonialSliceDefault = prismicT.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;
/**
 * Slice variation for *Testimonial*
 *
 */
type TestimonialSliceVariation = TestimonialSliceDefault;
/**
 * Testimonial Shared Slice
 *
 * - **API ID**: `testimonial`
 * - **Description**: `Testimonial`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TestimonialSlice = prismicT.SharedSlice<
  "testimonial",
  TestimonialSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      FooterDocumentData,
      FooterDocumentDataSocialsItem,
      FooterDocumentDataTermsItem,
      FooterDocumentDataSlicesSlice,
      FooterDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      HomepageDocument,
      AllDocumentTypes,
      BecomeATraderSliceDefaultPrimary,
      BecomeATraderSliceDefaultItem,
      BecomeATraderSliceDefault,
      BecomeATraderSliceVariation,
      BecomeATraderSlice,
      FooterItemSliceDefaultPrimary,
      FooterItemSliceDefaultItem,
      FooterItemSliceDefault,
      FooterItemSliceVariation,
      FooterItemSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefaultItem,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      HighlightSliceDefaultPrimary,
      HighlightSliceDefaultItem,
      HighlightSliceDefault,
      HighlightSliceHighlightMobileAppPrimary,
      HighlightSliceHighlightMobileAppItem,
      HighlightSliceHighlightMobileApp,
      HighlightSliceVariation,
      HighlightSlice,
      HighlightedArticlesSliceDefaultPrimary,
      HighlightedArticlesSliceDefault,
      HighlightedArticlesSliceVariation,
      HighlightedArticlesSlice,
      NewsletterSliceDefaultPrimary,
      NewsletterSliceDefault,
      NewsletterSliceVariation,
      NewsletterSlice,
      PossibilitiesSliceDefaultPrimary,
      PossibilitiesSliceDefaultItem,
      PossibilitiesSliceDefault,
      PossibilitiesSliceVariation,
      PossibilitiesSlice,
      SponsorsSliceDefaultItem,
      SponsorsSliceDefault,
      SponsorsSliceVariation,
      SponsorsSlice,
      StatisticsSliceDefaultPrimary,
      StatisticsSliceDefaultItem,
      StatisticsSliceDefault,
      StatisticsSliceVariation,
      StatisticsSlice,
      StepByStepSliceDefaultPrimary,
      StepByStepSliceDefaultItem,
      StepByStepSliceDefault,
      StepByStepSliceVariation,
      StepByStepSlice,
      TestimonialSliceDefault,
      TestimonialSliceVariation,
      TestimonialSlice,
    };
  }
}
