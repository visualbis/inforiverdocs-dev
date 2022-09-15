---
title: Number Formatting
sidebar_position: 4
slug: number-formatting
---
# Number Formatting

Inforiver allows formatting numbers/measures for the entire visual, cell, row or column level. You can do the following as part of the number formatting:

<aside>
💡 Refer to the other number settings [here](/settings/display-settings---numbers).

</aside>

## Related Links

[Display Settings - Numbers](/settings/display-settings---numbers)

[Total](/build/Total)

[Edit Cell](/visual/Editcell)

[Templates](/build/Template)


### 1. **Uniform**

To apply the universal format to numbers, follow these steps –

- In **Home** tab, under Number, click on the **Quick format** drop-down, select **Uniform**.
- Click the right arrow to select the scale you want to apply.
- By default in auto, the numbers are in Millions
    
    ![Uniform number format with Auto Scale](/img/build/NF1.png)
    
    Uniform number format with Auto Scale
    
    ![Scaling appears in Header](/img/build/NF2.jpg)

    Scaling appears in Header
    

### 2. **Measure Level**

To apply format at the measure level, follow these steps –

- In Home tab, under Number, click on **the Quick format** drop-down, and select **Measure level**.
- To apply the desired scale to a measure, select the column, click on the Quick format drop-down, and select the scale of choice.
    
    Measure level format is generally used in reports where there are measures of varying number scale. For example, in a sales report, you want to show Sales as well as Shipment data. Generally, sales data will have values in millions and Shipments in thousands. So, these numbers are better represented if the formats are different for these data.
    
- **To apply measure level**
    - Select the Measure level format from the Quick format
    - by default, all the measures are in millions
    - select the column that measures need to change
    - and select a new format by clicking on Quick format

![Measure Level Number Format](/img/build/NF3.jpg)
Measure Level Number Format

![Scaling set to Thousands for selected cell](/img/build/NF4.jpg)

Scaling set to Thousands for selected cell

![Scaling appears under each column header](/img/build/NF5.png)
Scaling appears under each column header

### 3. **Auto**

To apply format at **individual level**, follow these steps –

- In **Home** tab, under Number, click on the **Quick format** drop-down, and select **Auto**.
- To apply the desired scale, select the column, click on the Quick format drop-down, and select the scale of choice.On applying Auto format, the scales will appear as labels.
    - **How to apply Auto**
        - Select Auto mode
        - Select unit type for display
        - Select column for changing the format type and click on Quick format
        - Apply required format
        

![Auto format to change number format in each cell](/img/build/NF6.jpg)

Auto format to change number format in each cell

![Scaling set to Thousands for selected cell](/img/build/NF7.jpg)

Scaling set to Thousands for selected cell

![Scaling label appears on each cell value](/img/build/NF8.png)
Scaling label appears on each cell value

You can further **customize the labels** in Display –

In the **Home** tab, under Setup, click on **Display**. This will launch a side panel.

- In Display, under **Numbers**, turn on the **unit label**.
- Under Short text, enter the text of your choice.
    
    ![Customize Scaling unit labels (short and full)](/img/build/NF9.png)
    
    Customize Scaling unit labels (short and full)
    

### 4. **Native**

If you want to retain the format from ****Power BI. You can simply select the Native option.

- In **Home** tab, under Number, click on **Quick format** drop down, and select **Native**.
    
    ![Native format to retain PowerBI number format](/img/build/NF10.jpg)
    
    Native format to retain PowerBI number format
    
    ![Screenshot 2022-05-23 at 6.32.42 PM.png](/img/build/NF11.png)
    

## **Prefix/Suffix**

In financial and performance reports we generally see currency and % symbols. Inforiver brings us the options to add prefix as well as suffix. 

To add prefix/ suffix  –

- Select row/column/cell for which you want to apply prefix/suffix.
- In **Home** tab, under Number, click on Insert a **Prefix or Suffix**. A Prefix/Suffix box will pop out.
    
    ![Prefix/Suffix Icon](/img/build/NF12.png)

    Prefix/Suffix Icon
    
- In the box under **Value prefix** enter you desired prefix. For example, enter $.
    
    Similarly, in **Value suffix** enter the desired sign.
    
    ![Prefix and Suffix Box](/img/build/NF13.jpg)

    Prefix and Suffix Box
    
    ![Rows with $ prefix](/img/build/NF14.jpg)
    Rows with $ prefix
    

## **Increase/decrease decimal**

You can format your values by increasing/decreasing the decimal. To do this follow these steps –

- In **Home** tab, under Number, click on **Increase/decrease decimal**. This will increase/decrease the decimal of all the values.
- If you want to edit specific values - first select row/column/cell which contains the values you want to format, and then click on click on Increase/decrease decimal.
    
    ![Increase and Decrease Decimal Icons](/img/build/NF15.jpg)
    Increase and Decrease Decimal Icons
    

## **Percent Style (%)**

Percent style displays values as percentages by multiplying the values by 100 and adding % a suffix to the percentage values.

This is a feature that is commonly used while inserting calculated rows or columns. 

To apply percent style, follow these steps –

- Select the row/column/cell you want to apply the percent style
- In **Home** tab, under Number, click on **Percent style (%)**
    
    ![Percent.jpg](/img/build/NF16.jpg)

For example, lets calculate gross margin % in Inforiver.

1. Insert a calculated row and enter this formula ([See Insert Row](/visual/insert-row)
    
    Gross Margin % = (Net Revenue - Cost of goods sold)/ Net Revenue.
    
    ![Before applying Percentage](/img/build/NF17.png)
    Before applying Percentage
    
2. Now select Gross Margin % row in the visual and click on **percent style (%)**.
    
    ![Gross margin% Row converted to Percentage Value](/img/build/NF18.png)
    
    Gross margin% Row converted to Percentage Value

## Related Links
- [Quick Format](/build/number-formatting#quick-format)
- [Measure Level](/build/number-formatting#2-measure-level)
- [Prefix/Suffix](/build/number-formatting#prefixsuffix)
- [Increase/Decrease Decimal Points](/build/number-formatting#increasedecrease-decimal)
- [Percent Style %](/build/number-formatting)
