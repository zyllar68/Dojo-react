import React from 'react';
import { Columns, Column  } from './bulma_components/ColumnsComponent';
import { Title } from './bulma_components/TitleComponent';
import { Dropdown, DropdownItem, DropdownResult, DropdownTrigger, DropdownMenu, DropdownContent } from './bulma_components/DropdownComponent';
import { Button } from './bulma_components/ButtonComponent';
import { Icon } from './bulma_components/IconComponent';
import { CustomCardSectionHouse5 } from './CustomCard';

export const ColumnSection4 = ({ nameClass, label, imgSrc}) => (

  <Column nameClass={nameClass}>
    <img className="box-image1" src={imgSrc} />
    <Title nameClass='section4semititle' label={label} />
  </Column>

);

export const ColumnSection5 = ({ label, iconClass, iconNameClass, resultLabel }) => (

  <Column>
    <Dropdown nameClass='section6dropdown'>
      <DropdownTrigger>
        <Button aria-haspopup='true' aria-controls='dropdown-menu'>
          <span>{label}</span>
          <Icon nameClass={iconNameClass} iconClass={iconClass} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu id='dropdown-menu' role='menu'>
        <DropdownContent>
          <DropdownItem label='Dropdown item'/>
          <DropdownItem nameClass='is-active' label='Other dropdown item'/>
          <DropdownItem label='Active dropdown item'/>
          <DropdownItem label='Other dropdown item'/>
            <hr className='dropdown-divider' />
          <DropdownItem nameClass='is-active' label='With a divider'/>
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
    <br />
    <DropdownResult label={resultLabel}/>
  </Column>

);

export const ColumnSectionCard5 = () => (

  <Column nameClass='is-half-mobile'>
    <CustomCardSectionHouse5 imgNameClass='icon-heart' imgHeart='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNTAiIGhlaWdodD0iNTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PGcgaWQ9InN1cmZhY2UxIj48cGF0aCBkPSJNNTEuNiwyNC4wOGMtMjQuNjU3ODEsMCAtNDQuNzIsMjAuMDYyMTkgLTQ0LjcyLDQ0LjcyYzAsNTAuNzgwMzEgNTcuNDMxODgsNzUuODQxMjUgNzYuOTcsOTIuMTI3NWwyLjE1LDEuODI3NWwyLjE1LC0xLjgyNzVjMTkuNTM4MTMsLTE2LjI4NjI1IDc2Ljk3LC00MS4zNDcxOSA3Ni45NywtOTIuMTI3NWMwLC0yNC42NTc4MSAtMjAuMDYyMTksLTQ0LjcyIC00NC43MiwtNDQuNzJjLTEzLjk0ODEyLDAgLTI2LjIwMzEyLDYuNjI0NjkgLTM0LjQsMTYuNjYyNWMtOC4xOTY4NywtMTAuMDM3ODEgLTIwLjQ1MTg3LC0xNi42NjI1IC0zNC40LC0xNi42NjI1ek01MS42LDMwLjk2YzEzLjE5NTYzLDAgMjQuNzI1LDYuNzcyNSAzMS40OTc1LDE2Ljk4NWwyLjkwMjUsNC4zbDIuOTAyNSwtNC4zYzYuNzcyNSwtMTAuMjEyNSAxOC4zMDE4OCwtMTYuOTg1IDMxLjQ5NzUsLTE2Ljk4NWMyMC45MzU2MywwIDM3Ljg0LDE2LjkwNDM4IDM3Ljg0LDM3Ljg0YzAsNDQuMzcwNjMgLTQ5LjU1NzUsNjcuMzM1MzEgLTcyLjI0LDg1LjI0NzVjLTIyLjY4MjUsLTE3LjkxMjE5IC03Mi4yNCwtNDAuODc2ODcgLTcyLjI0LC04NS4yNDc1YzAsLTIwLjkzNTYyIDE2LjkwNDM4LC0zNy44NCAzNy44NCwtMzcuODR6Ij48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+' imgHouse='./app/css/assets/house.jpeg'/>
  </Column>

);
