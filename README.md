# Time-Zone-Converter
# Time Zone Converter

## Description

The **Time Zone Converter** is a simple web-based tool that allows users to convert a specific time from one time zone to another. It supports a wide range of time zones, including common ones like **Pacific Standard Time (PST)**, **Eastern Standard Time (EST)**, **Greenwich Mean Time (GMT)**, **Indian Standard Time (IST)**, **Japan Standard Time (JST)**, **Australian Eastern Standard Time (AEST)**, **Korean Standard Time (KST)**, and **Switzerland Time (Zurich)**.

This project is built using **HTML**, **CSS**, and **JavaScript**, utilizing the **Moment.js** and **Moment Timezone** libraries for accurate time zone conversion. It handles **daylight saving time (DST)** changes and UTC offsets.

## Features

- **Time Zone Conversion**: Allows users to convert time from one time zone to another.
- **Dynamic Dropdown**: Users can select both the source and target time zones from a dynamic dropdown populated with time zone names and UTC offsets.
- **Wide Range of Supported Time Zones**: Includes **PST**, **EST**, **GMT**, **CET**, **AEST**, **KST**, **Europe/Zurich** (Switzerland), and more.
- **Daylight Saving Time (DST) Support**: The conversion accounts for daylight saving changes where applicable.

## Live Demo

You can try the live version of the **Time Zone Converter** here:

[Live Demo Link] (Insert your hosted link here)

## How to Use

1. **Enter the Time**: 
   - Input the time you want to convert in the **YYYY-MM-DD HH:mm:ss** format.
   
2. **Select Time Zones**:
   - Choose the **From Time Zone** (the current time zone of your input time).
   - Choose the **To Time Zone** (the time zone you want to convert the time to).

3. **Click Convert**: 
   - Hit the **Convert** button to see the converted time in the selected destination time zone.

## Technologies Used

- **HTML**: For the structure of the webpage.
- **CSS**: For styling the page and making it responsive.
- **JavaScript**: For handling the time zone conversion logic.
- **Moment.js**: For parsing and manipulating date/time values.
- **Moment Timezone**: For converting between different time zones accurately.

## Installation

### 1. Clone or Download the Repository

To get started, clone or download the repository to your local machine.

```bash
git clone https://github.com/yourusername/timezone-converter.git
