#!/bin/bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"


LAYOUT="$SCRIPT_DIR/templates/page.html"
BODY=""

while [[ "$#" -gt 0 ]]; do
    case $1 in
        --hero) BODY="$BODY$(cat "$SCRIPT_DIR/components/hero.html")" ;;
        --itinerary) BODY="$BODY$(cat "$SCRIPT_DIR/components/itinerary.html")" ;;
        --faq) BODY="$BODY$(cat "$SCRIPT_DIR/components/faq.html")" ;;
        --gallery) BODY="$BODY$(cat "$SCRIPT_DIR/components/gallery.html")" ;;
        --cta) BODY="$BODY$(cat "$SCRIPT_DIR/components/cta.html")" ;;
    esac
    shift
done

OUTPUT=$(cat "$LAYOUT")
OUTPUT="${OUTPUT//%%HEADER%%/$HEADER}"
OUTPUT="${OUTPUT//%%BODY%%/$BODY}"
OUTPUT="${OUTPUT//%%FOOTER%%/$FOOTER}"

mkdir -p "$SCRIPT_DIR/_build"
echo "$OUTPUT" > "$SCRIPT_DIR/_build/output.html"
