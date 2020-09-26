import { useEffect, useState } from 'react';
import Drawer from '@sandika_components/commons/Drawer';
import Button from '@sandika_components/commons/Button';
import { Media, MediaBody, MediaImage } from '@sandika_components/commons/Media';
import { Input } from '@sandika_components/commons/Form';
import Block from '@sandika_components/core/Block';
import ArrowBackIcon from '@public/media/icons/back.svg';
import './searchdrawer.module.scss';

const SearchDrawer = ({ open, handleClose }) => {

  const [searchSugesstionsItems, setSearchSugesstionsItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(Response => { return Response.json() })
      .then(Result => { return setSearchSugesstionsItems(Result) });
  }, []);

  return (
    <>
      <Drawer blank isOpen={open}>
        <div className={'search_drawer__header'}>
          <div className={'search_drawer__header_content'}>
            {/* Back Button */}
            <div className={'search_drawer__navigation'}>
              <Button btnWhite onClick={handleClose}>
                <ArrowBackIcon className={'close__icon'} />
              </Button>
            </div>

            {/* Search Form */}
            <div className={'drawer__search_form'}>
              <form>
                <Input type={"text"} placeholder={"Cari Produk Yang Kamu Sukai"} id={"search"} name={"search"} />
              </form>
            </div>
          </div>
        </div>

        {/* Search Result */}
        <div className={'search_drawer__body'}>
          <Block title={'Pencarian'}>
            <Media><MediaBody>Payung</MediaBody></Media>
            <Media><MediaBody>Keripik Singkong</MediaBody></Media>
            <Media><MediaBody>Kertas Manila</MediaBody></Media>
          </Block>
          <Block title={'Produk Populer'} additional={'Lihat Semua'}>
            {searchSugesstionsItems.map((item, i) => {
              if (i < 5) {
                return (
                  <Media key={i}>
                    <MediaImage><img src={item.image} /></MediaImage>
                    <MediaBody>{item.title}</MediaBody>
                  </Media>
                )
              }
              return
            })}
          </Block>
        </div>
      </Drawer>
    </>
  );
};

export default SearchDrawer;
