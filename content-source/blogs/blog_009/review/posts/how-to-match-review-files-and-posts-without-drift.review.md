# Review Summary

Core decisions:
- Treat reviews as identity records, not comments.
- Require blog id, post number, and slug to match before a review is valid.
- Move the review file with the post on studio → blog transitions.

Key risks checked:
- Mismatch should fail early instead of attaching quietly.
- Slug change must force review rename.
- Identity chain should be verifiable before publish.
