import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import classNames from 'classnames';
import { usePagination, DOTS } from './usepagination';
import './pagination.css';
import Input from '../Input/input';
import PrimaryButton from "../Button/Button";
import Select from "../Select/Select";
import React from "react";



interface IPaginationProps {
    onPageChange: (number: number) => void;
    totalCount: number;
    siblingCount: number;
    currentPage: number;
    pageSize: number;
    className: string;
    setCurrentPage: Dispatch<SetStateAction<number>>;
    handleOnSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const options: any[] = [
    { key: '10', title: '10' },
    { key: '20', title: '20' },
    { key: '30', title: '30' },
];

const Pagination = ({
                        onPageChange,
                        totalCount,
                        siblingCount = 1,
                        currentPage,
                        pageSize,
                        className,
                        setCurrentPage,
                        handleOnSelect,
                    }: IPaginationProps) => {
    const paginationRange: (string | number)[] | any = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });
    const [currentPageValue, setCurrentPageValue] = useState<number>(0);

    if (currentPage === 0) {
        return null;
    }
    const onPrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const lastPage = paginationRange[paginationRange.length - 1];

    const onNext = () => {
        if (currentPage === lastPage) return;
        if (currentPage !== lastPage) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex justify-between">
            <div className="flex items-center">
                <div
                    className={classNames('pagination-container', {
                        [className]: className,
                    })}
                >
                    <div
                        className={classNames('pagination-item', {
                            disabled: currentPage === 1,
                        })}
                        onClick={onPrevious}
                    >
                        <div
                            className="arrow"
                            style={{
                                transform: 'rotate(-135deg) translate(-50%)',
                            }}
                        />
                    </div>
                    {paginationRange.map((pageNumber: any,index:number) => {
                        if (pageNumber === DOTS) {
                            return (
                                <div  key={index} className="pagination-item dots">
                                    &#8230;
                                </div>
                            );
                        }

                        return (
                            <div
                                key={pageNumber}
                                className={classNames('pagination-item', {
                                    'bg-green-200': pageNumber === currentPage,
                                })}
                                onClick={(e) => {
                                    const eventTarget = e.target as HTMLElement;
                                    onPageChange(
                                        parseInt(eventTarget.innerText)
                                    );
                                }}
                            >
                                {pageNumber}
                            </div>
                        );
                    })}
                    <div
                        className={classNames('pagination-item', {
                            'pointer-events-none hover:bg-none':
                                currentPage === lastPage,
                        })}
                        onClick={onNext}
                    >
                        <div
                            className="arrow"
                            style={{ transform: 'rotate(45deg' }}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-sm">Go To Page</div>
                    <Input
                        type="number"
                        className="!w-10 !bg-white"
                        onChange={(e:any) =>
                            setCurrentPageValue(parseInt(e.target.value))
                        }
                    />
                    <PrimaryButton
                        onClick={() => {
                            if (
                                currentPageValue > 0 &&
                                !(paginationRange.length < 2) &&
                                (currentPageValue < paginationRange.length ||
                                    currentPageValue === paginationRange.length)
                            ) {
                                setCurrentPage(currentPageValue);
                            }
                            if (
                                paginationRange.length < 2 &&
                                currentPageValue > paginationRange.length
                            ) {
                              return
                            }
                        }}
                        type="button"
                        name="Go"
                        color="#8FB131"
                        variant="filled"
                        className="!h-[36px] w-fit p-2  font-medium"
                    />
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-sm ml-2">Show Transactions</div>
                <Select
                    className="!bg-white"
                    label="pageList"
                    options={options}
                    handleOnSelect={(e:any) => handleOnSelect(e)}
                />
            </div>
        </div>
    );
};

export default Pagination;