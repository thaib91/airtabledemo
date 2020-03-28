import React, {useState} from 'react';
import {
    initializeBlock,
    useBase,
    useRecords,
    useGlobalConfig,
    expandRecord,
    TablePickerSynced,
    ViewPickerSynced,
    FieldPickerSynced,
    FormField,
    Input,
    Button,
    Box,
    Icon,
} from '@airtable/blocks/ui';

import {FieldType} from '@airtable/blocks/models';

import {base} from '@airtable/blocks';

const table = base.getTableByName('My Runners');
const field = table.getFieldByName('Runner Times');



function TodoBlock() {
    let styles2 = {
        margin: '20px',
        width: '200px',
        height: '200px',
        backgroundColor: 'grey',
        display: 'inline-block',
        color: 'black',
      };
    const base = useBase();
    let eventFields = base.tables[1].fields.map((event, i)=>{
        return event.name //outputs in console.. but not in block?

    });


    return (
        <div style={styles2}>{eventFields}</div>
    );
}



initializeBlock(() => <TodoBlock />);
// initializeBlock is used to run code in block on Airtable