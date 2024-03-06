import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import StudyFlashCardPage from './StudyFlashCardPage';

describe("StudyFlashCardPage", () => {
    let flashcards = [];

    beforeEach(() => {
        flashcards = [
            { term: 'Term 1', definition: 'Definition 1' },
            { term: 'Term 2', definition: 'Definition 2' },
        ];

        render(
            <Router>
                <StudyFlashCardPage />
            </Router>
        );
    });

    afterEach(() => {
        cleanup();
    });

    it('renders flashcard container', () => {
        const flashcardContainer = screen.getByRole('flashcard-container');
        expect(flashcardContainer).toBeInTheDocument();
    });

    it('displays flashcard topic', () => {
        const flashcardTopic = screen.getByText('Science');
        expect(flashcardTopic).toBeInTheDocument();
    });

    it('displays edit icon', () => {
        const editIcon = screen.getByAltText('Edit');
        expect(editIcon).toBeInTheDocument();
    });

    it('flips flashcard on click', () => {
        const flipper = screen.getByRole('flipper');
        userEvent.click(flipper);
        setTimeout(() => {
        const definitionElement = screen.getByText(flashcards[0].definition);
        expect(definitionElement).toBeInTheDocument();
    }, 100);
    });

    it('displays next flashcard on "Next" button click', () => {
        const nextButton = screen.getByText('Next');
        userEvent.click(nextButton);
        setTimeout(() => {
        expect(screen.getByText(flashcards[1].term)).toBeInTheDocument();
    }, 100);
    });

    it('displays previous flashcard on "Previous" button click', () => {
        const prevButton = screen.getByText('Previous');
        userEvent.click(prevButton);
        setTimeout(() => {
            expect(screen.getByText(flashcards[flashcards.length - 1].term)).toBeInTheDocument();
        }, 100); 
    });
});
