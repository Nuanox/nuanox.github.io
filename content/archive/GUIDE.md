# Archive Content Guide

This file is a reference for humans and LLMs. It is not rendered as a Hugo page.

## Front matter fields

| Field   | Required | Description                            |
|---------|----------|----------------------------------------|
| title   | yes      | Subject or short summary of the entry  |
| date    | yes      | ISO 8601 datetime with timezone        |
| tags    | no       | List of keyword strings                |
| type    | no       | Set to "archive" for archive entries   |
| draft   | no       | Set to true to hide from published site|

## File naming

Pattern: `YYYY-MM-DD-topic-slug.md`

Examples:
- `2026-03-04-morning-thoughts.md`
- `2026-03-04-idea-about-llm-proxy.md`
- `2026-03-05-daily-reflection.md`

Multiple files per day are expected. The slug part helps identify the topic.

## Tags

Tags are free-form strings in Korean or English.
They enable filtering on the site and can later be used for keyword frequency analysis.

Common tags might include: 일상, 아이디어, 기술, 감정, 계획

## How STT content enters this folder

Currently manual: transcribe voice to text, save as a markdown file here.
Future options include automated pipelines from Google Drive or mobile apps.
