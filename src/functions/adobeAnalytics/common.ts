// ページごとに指定されているAA要件のページ名
export const PageName = {
  Common: "invoice:common",
  Top: "invoice:top",
  Cost: "invoice:cost",
  Function: "invoice:function",
  Flow: "invoice:flow",
  DocumentRequest: "invoice:document_request",
  DocumentRequestThanks: "invoice:document_request:thanks",
  Apply: "invoice:apply",
  Contact: "invoice:it-hojo:contact",
  ContactThanks: "invoice:it-hojo:contact:thanks",
  Entry: "invoice:it-hojo:entry",
  EntryThanks: "invoice:it-hojo:entry:thanks",
  Inquiry: "invoice:inquiry",
  InquiryThanks: "invoice:inquiry:thanks",
  ElectronicBook: "invoice:electronic_book",
  Case: "invoice:case",
  Case01: "invoice:case:01",
  Case02: "invoice:case:02",
} as const
export type PageName = typeof PageName[keyof typeof PageName]
