export type IconsId =
  | "fill-bell"
  | "fill-buildings"
  | "fill-chat"
  | "fill-file-doc"
  | "fill-file-pdf"
  | "fill-file-xsl"
  | "fill-file"
  | "fill-plus-circle"
  | "fill-x-circle-fill"
  | "line-add-user"
  | "line-arrow-left"
  | "line-arrow-right"
  | "line-bell"
  | "line-buildings"
  | "line-calendar"
  | "line-caret-down"
  | "line-caret-left"
  | "line-caret-right"
  | "line-caret-up"
  | "line-chart-bar-horizontal"
  | "line-chat-circle"
  | "line-chat"
  | "line-cross"
  | "line-dots-three-circle-vertical"
  | "line-dots-three-vertical"
  | "line-eye-closed"
  | "line-eye-open"
  | "line-file-arrow-down"
  | "line-file-arrow-up"
  | "line-files"
  | "line-funnel"
  | "line-mail"
  | "line-mark"
  | "line-menu"
  | "line-pencil-simple"
  | "line-plan"
  | "line-plus"
  | "line-resume"
  | "line-search"
  | "line-sign-out"
  | "line-sort-ascending"
  | "line-sort-descending"
  | "line-text"
  | "line-trash"
  | "line-user-circle"
  | "line-users";

export type IconsKey =
  | "FillBell"
  | "FillBuildings"
  | "FillChat"
  | "FillFileDoc"
  | "FillFilePdf"
  | "FillFileXsl"
  | "FillFile"
  | "FillPlusCircle"
  | "FillXCircleFill"
  | "LineAddUser"
  | "LineArrowLeft"
  | "LineArrowRight"
  | "LineBell"
  | "LineBuildings"
  | "LineCalendar"
  | "LineCaretDown"
  | "LineCaretLeft"
  | "LineCaretRight"
  | "LineCaretUp"
  | "LineChartBarHorizontal"
  | "LineChatCircle"
  | "LineChat"
  | "LineCross"
  | "LineDotsThreeCircleVertical"
  | "LineDotsThreeVertical"
  | "LineEyeClosed"
  | "LineEyeOpen"
  | "LineFileArrowDown"
  | "LineFileArrowUp"
  | "LineFiles"
  | "LineFunnel"
  | "LineMail"
  | "LineMark"
  | "LineMenu"
  | "LinePencilSimple"
  | "LinePlan"
  | "LinePlus"
  | "LineResume"
  | "LineSearch"
  | "LineSignOut"
  | "LineSortAscending"
  | "LineSortDescending"
  | "LineText"
  | "LineTrash"
  | "LineUserCircle"
  | "LineUsers";

export enum Icons {
  FillBell = "fill-bell",
  FillBuildings = "fill-buildings",
  FillChat = "fill-chat",
  FillFileDoc = "fill-file-doc",
  FillFilePdf = "fill-file-pdf",
  FillFileXsl = "fill-file-xsl",
  FillFile = "fill-file",
  FillPlusCircle = "fill-plus-circle",
  FillXCircleFill = "fill-x-circle-fill",
  LineAddUser = "line-add-user",
  LineArrowLeft = "line-arrow-left",
  LineArrowRight = "line-arrow-right",
  LineBell = "line-bell",
  LineBuildings = "line-buildings",
  LineCalendar = "line-calendar",
  LineCaretDown = "line-caret-down",
  LineCaretLeft = "line-caret-left",
  LineCaretRight = "line-caret-right",
  LineCaretUp = "line-caret-up",
  LineChartBarHorizontal = "line-chart-bar-horizontal",
  LineChatCircle = "line-chat-circle",
  LineChat = "line-chat",
  LineCross = "line-cross",
  LineDotsThreeCircleVertical = "line-dots-three-circle-vertical",
  LineDotsThreeVertical = "line-dots-three-vertical",
  LineEyeClosed = "line-eye-closed",
  LineEyeOpen = "line-eye-open",
  LineFileArrowDown = "line-file-arrow-down",
  LineFileArrowUp = "line-file-arrow-up",
  LineFiles = "line-files",
  LineFunnel = "line-funnel",
  LineMail = "line-mail",
  LineMark = "line-mark",
  LineMenu = "line-menu",
  LinePencilSimple = "line-pencil-simple",
  LinePlan = "line-plan",
  LinePlus = "line-plus",
  LineResume = "line-resume",
  LineSearch = "line-search",
  LineSignOut = "line-sign-out",
  LineSortAscending = "line-sort-ascending",
  LineSortDescending = "line-sort-descending",
  LineText = "line-text",
  LineTrash = "line-trash",
  LineUserCircle = "line-user-circle",
  LineUsers = "line-users",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.FillBell]: "61697",
  [Icons.FillBuildings]: "61698",
  [Icons.FillChat]: "61699",
  [Icons.FillFileDoc]: "61700",
  [Icons.FillFilePdf]: "61701",
  [Icons.FillFileXsl]: "61702",
  [Icons.FillFile]: "61703",
  [Icons.FillPlusCircle]: "61704",
  [Icons.FillXCircleFill]: "61705",
  [Icons.LineAddUser]: "61706",
  [Icons.LineArrowLeft]: "61707",
  [Icons.LineArrowRight]: "61708",
  [Icons.LineBell]: "61709",
  [Icons.LineBuildings]: "61710",
  [Icons.LineCalendar]: "61711",
  [Icons.LineCaretDown]: "61712",
  [Icons.LineCaretLeft]: "61713",
  [Icons.LineCaretRight]: "61714",
  [Icons.LineCaretUp]: "61715",
  [Icons.LineChartBarHorizontal]: "61716",
  [Icons.LineChatCircle]: "61717",
  [Icons.LineChat]: "61718",
  [Icons.LineCross]: "61719",
  [Icons.LineDotsThreeCircleVertical]: "61720",
  [Icons.LineDotsThreeVertical]: "61721",
  [Icons.LineEyeClosed]: "61722",
  [Icons.LineEyeOpen]: "61723",
  [Icons.LineFileArrowDown]: "61724",
  [Icons.LineFileArrowUp]: "61725",
  [Icons.LineFiles]: "61726",
  [Icons.LineFunnel]: "61727",
  [Icons.LineMail]: "61728",
  [Icons.LineMark]: "61729",
  [Icons.LineMenu]: "61730",
  [Icons.LinePencilSimple]: "61731",
  [Icons.LinePlan]: "61732",
  [Icons.LinePlus]: "61733",
  [Icons.LineResume]: "61734",
  [Icons.LineSearch]: "61735",
  [Icons.LineSignOut]: "61736",
  [Icons.LineSortAscending]: "61737",
  [Icons.LineSortDescending]: "61738",
  [Icons.LineText]: "61739",
  [Icons.LineTrash]: "61740",
  [Icons.LineUserCircle]: "61741",
  [Icons.LineUsers]: "61742",
};
