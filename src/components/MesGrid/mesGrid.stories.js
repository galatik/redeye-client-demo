import React from 'react';
import { storiesOf } from '@storybook/react';
import MesGrid from '.';
import { GridColumn } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-default/dist/all.css';

let gridData = {
    "data": [
        {
            "Id": 10,
            "Name": "Печь обжига",
            "Code": "000018",
            "Description": "Печь обжига 1",
            "EquipmentArea": "Участок термообработки",
            "EquipmentType": "Печь",
            "TerminalName": "Терминал 2 (термо)"
        },
        {
            "Id": 2,
            "Name": "Пресс 1",
            "Code": "000010",
            "Description": null,
            "EquipmentArea": "Участок прессования",
            "EquipmentType": "Пресс",
            "TerminalName": "Терминал 1 (пресс)"
        },
        {
            "Id": 5,
            "Name": "Пресс 1",
            "Code": "000013",
            "Description": "К400А",
            "EquipmentArea": "Area_27",
            "EquipmentType": "Type_13",
            "TerminalName": "Test"
        },
        {
            "Id": 6,
            "Name": "Пресс 2",
            "Code": "000014",
            "Description": "К400А",
            "EquipmentArea": "Area_28",
            "EquipmentType": "Type_26",
            "TerminalName": "press4"
        },
        {
            "Id": 25,
            "Name": "Пресс 22",
            "Code": "000021",
            "Description": "К400А",
            "EquipmentArea": "Участок прессования 2",
            "EquipmentType": "Пресс",
            "TerminalName": "Терминал 2 (пресс)"
        },
        {
            "Id": 26,
            "Name": "Пресс 23",
            "Code": "000022",
            "Description": "К400А",
            "EquipmentArea": "Участок прессования 2",
            "EquipmentType": "Пресс",
            "TerminalName": "terminal316"
        },
        {
            "Id": 28,
            "Name": "Пресс 25",
            "Code": "000024",
            "Description": "К400А",
            "EquipmentArea": "Участок прессования 2",
            "EquipmentType": "Пресс",
            "TerminalName": "Терминал 1 (пресс)"
        },
        {
            "Id": 29,
            "Name": "Пресс 26",
            "Code": "000025",
            "Description": "К400А",
            "EquipmentArea": "Участок прессования 2",
            "EquipmentType": "Пресс",
            "TerminalName": "Терминал 1 (пресс)"
        },
        {
            "Id": 30,
            "Name": "Пресс 27",
            "Code": "000026",
            "Description": "К400А",
            "EquipmentArea": "Участок прессования 2",
            "EquipmentType": "Пресс",
            "TerminalName": "Терминал 1 (пресс)"
        },
        {
            "Id": 31,
            "Name": "Пресс 28",
            "Code": "000027",
            "Description": "К400А",
            "EquipmentArea": "Участок прессования 2",
            "EquipmentType": "Пресс",
            "TerminalName": "Терминал 1 (пресс)"
        }
    ],
    "total": 21,
    "AggregateResults": null,
    "Errors": null
};

let fetchData = (dataState) => {
    console.log('fetching');
    console.log(dataState);
};

storiesOf('MesGrid', module)
    .add('article grid',() => {
       return (
           <MesGrid gridData={gridData} isFetching={ false } fetchData={fetchData} >
               <GridColumn field="Name" title="Name" />
               <GridColumn field="Code" title="Code" />
               <GridColumn field="Description" title="Description" />
               <GridColumn field="EquipmentArea" title="Equipment Area" />
               <GridColumn field="EquipmentType" title="Equipment Type" />
               <GridColumn field="TerminalName" title="Terminal Name" />
           </MesGrid>
       );
    });