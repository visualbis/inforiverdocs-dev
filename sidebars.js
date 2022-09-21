/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  /*  "Docs": [{type: 'autogenerated', dirName: '.'}], */
  Build: [
    {
      type: "category",
      label: "Build Reports",
      items: [
        "build/Alignment",
        "build/Number Formatting",
        "build/Setup a Navigation Layout",
        "build/Style",
        "build/Manage Column",
        "build/Group",
        "build/Annotate with Notes",
      ],
    },
    "build/Templates",
    "build/Show and hide",
    "build/Total",
  ],
  Visual: [
    {
      type: "category",
      label: "Visual Calculations",
      items: [
        "visual/Insert row",
        "visual/Toggle Sign",
      ],
    },
    "visual/formula-list",
    "visual/Insert Column and Insert Measures",
    "visual/Edit Cell",
  ],
  Analyze: [
    "analyze/Conditional Formatting",
    "analyze/Filter and Search",
    "analyze/Smart Analysis",
    "analyze/Top N",
  ],
  Enterprise: [
    {
      type: "category",
      label: "Build Reports",
      items: [
        "enterprise/Commenting",
        "enterprise/Scheduler",
      ],
    },
    "enterprise/Commenting",
    "enterprise/Scheduler", 
  ],
  Settings: [
    {
      type: "category",
      label: "Display Settings",
      items: [
        "settings/BackupRestore Config",
        "settings/Display Settings - General",
        "settings/Display Settings - Hierarchy",
        "settings/Display Settings - Numbers",
      ],
    },
    "settings/Headers and Footers",
    "settings/Pagination and Breaks",
    "settings/Shortcut keys",
    "settings/Utilities",
  ],
  functionSideBar: {
    "Formula Syntax": ["visual/formula-list"],
    "Logical Functions": [
      "references/formulas/if",
      "references/formulas/switch",
      "references/formulas/and",
      "references/formulas/or",
      "references/formulas/not",
      "references/formulas/xor",
      "references/formulas/isnumber",
      "references/formulas/ifna",
      "references/formulas/in",
    ],
    "Text Formatting Functions": [
      "references/formulas/text",
      "references/formulas/concatenate",
    ],
    "Math Functions": [
      "references/formulas/sum",
      "references/formulas/average",
      "references/formulas/averageexzero",
      "references/formulas/averageexneg",
      "references/formulas/averageexzeroneg",
      "references/formulas/countif",
      "references/formulas/abs",
      "references/formulas/min",
      "references/formulas/max",
      "references/formulas/power",
      "references/formulas/sqrt",
      "references/formulas/exp",
      "references/formulas/log",
      "references/formulas/round",
      "references/formulas/ceiling",
      "references/formulas/floor",
    ],
  },
};
