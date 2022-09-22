---
title: Top N
sidebar_position: 4
slug: TopN
---
import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.
import Link from "@docusaurus/Link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

# Top N


The Top and Bottom categories based on any measure can be displayed using Top N feature. Top N can be applied to only **one column/measure** at a time. Though, you can add multiple Top or Bottom conditions on the same measure.

Let’s consider the example of displaying the 5 Top states in each region and the best and worst selling products under these states:

- Select the Sales column.
- Select the **Home** tab from the toolbar, and select **Top N** from the **Analyze** section.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img width="550"
      src={useBaseUrl("/img/Analysis/TopN/topn1.png")}
    />
  </Zoom>
</div>


    Top 5 States 

- In the Top n dialog box that appears, we have the following options:
    - Top/Bottom/Both: Both displays Top and Bottom
    - Number of items
    - Condition-based on Value or Percentage
    - Field to apply condition
    
   
  <div style={{ textAlign: "center" }}>
  <Zoom>
    <img width="550px" height="215px"
      src={useBaseUrl("/img/Analysis/TopN/topn2.png")}
    />
  </Zoom>
</div>
  
    Choose from Top, Bottom or Both
    
- To display the remaining categories as Others, check the box.
    
    The name can be customised from “others” to any other name. Click on the pen icon to edit the name.
    
    ![Aggregate the Rest as Others](/img/Analysis/TopN/topn3.png)
    Aggregate the Rest as Others
    
- To display the category label next to Others, check “suffix others with category name”
    
    ![Show the category label as suffix](/img/Analysis/TopN/topn4.png)

    Show the category label as suffix
    
    ![Top 5 states based on the value](/img/Analysis/TopN/topn5.png)
    
    Top 5 states based on the value
    
- To apply another Top N condition on the Product, follow the same procedure as above.
- In the Top N dialog box that appears, click on **Add rule**.
- Make the following selections:
    
    ![Add another Top n rule](/img/Analysis/TopN/topn6.png)

    Add another Top n rule
    
    ![Showing results for the value and percentage selected](/img/Analysis/TopN/topn7.png)
    
    Showing results for the value and percentage selected
    
- To delete a top n condition, click the **Delete** icon in the Top n dialog box.
    
    ![Untitled](/img/Analysis/TopN/topn8.png)

- To clear all the Top n conditions, click on **Reset All** in the Top n dialog box.
    
    ![Untitled](/img/Analysis/TopN/topn9.png)

- The following warning is displayed when you try to apply Top n on another measure.
    
    ![Warning message](/img/Analysis/TopN/topn10.jpg)
    
    Warning message


## Related Links

[Insert row](/visual/insert-row)

[Setup a Navigation Layout](/build/setup-a-navigation-layout)

[Annotate with Notes](/build/Annotatenotes)

[Headers and Footers](/settings/headers-and-footers)

[Utilities](/settings/utilities)    